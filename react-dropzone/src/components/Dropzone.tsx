import { useCallback, useState } from "react";
import {
  useDropzone,
  DropzoneRootProps,
  DropzoneInputProps,
} from "react-dropzone";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface AcceptedFilesType extends File {
  preview: string;
}

interface RejectedFilesError {
  code: string;
  message: string;
}

interface RejectedFilesType {
  file: File;
  errors: RejectedFilesError[];
}

type OnDropType = (
  acceptedFiles: File[],
  rejectedFiles: RejectedFilesType[]
) => void;

interface DropzoneProps {
  className: string;
}

export default function Dropzone({ className }: DropzoneProps) {
  const [files, setFiles] = useState<AcceptedFilesType[]>([]);
  const [rejected, setRejected] = useState<RejectedFilesType[]>([]);

  const onDrop: OnDropType = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  }: {
    getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;
    getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
    isDragActive: boolean;
  } = useDropzone({ onDrop, accept: { "image/*": [] }, maxSize: 1024 * 200 });

  function removeFile(name: string) {
    setFiles((files) => files.filter((file) => file.name !== name));
  }

  function removeRejected(name: string) {
    setRejected((files) => files.filter(({ file }) => file.name !== name));
  }

  return (
    <form>
      <div {...getRootProps({ className })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here!</p>
        ) : (
          <div>
            <p>Drag and drop some files here, or click to select files!</p>
          </div>
        )}
      </div>

      {/* ACCEPTED FILES */}
      <h3 className="title text-lg font-semibold text-neutral-600 mt-10 border-b pb-3">
        Accepted Files
      </h3>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
        {files.map((file) => (
          <li
            key={file.name}
            className="relative h-36 bg-primary-400 p-3 rounded-md shadow-lg"
          >
            <img
              src={file.preview}
              onLoad={() => URL.revokeObjectURL(file.preview)}
              className="h-[100px] w-[100px] object-cover rounded-md"
            />
            <button
              type="button"
              className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors"
              onClick={() => removeFile(file.name)}
            >
              <XMarkIcon className="w-5 h-5 fill-white hover:fill-secondary-400 transition-colors" />
            </button>
            <p className="mt-2 text-black text-[14px]">{file.name}</p>
          </li>
        ))}
      </ul>

      {/* REJECTED FILES */}
      <h3 className="title text-lg font-semibold text-neutral-600 mt-24 border-b pb-3">
        Rejected Files
      </h3>
      <ul className="mt-6 flex flex-col">
        {rejected.map(({ file, errors }) => (
          <li key={file.name} className="flex items-start justify-between">
            <div>
              <p className="mt-2 text-neutral-500 text-sm font-medium">
                {file.name}
              </p>
              <ul className="text-[12px] text-red-400">
                {errors.map((error) => (
                  <li key={error.code}>{error.message}</li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className="mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
              onClick={() => removeRejected(file.name)}
            >
              remove
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}
