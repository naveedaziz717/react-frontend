import { useEffect, useRef, useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current === null) return;
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
  }, [text]);

  return (
    <div className="min-h-screen bg-neutral-950 grid place-items-center">
      <div className="text-neutral-200 bg-neutral-800 p-2 w-[30rem] rounded flex flex-col space-y-2">
        <span className="text-xl">Input Text</span>
        <textarea
          className="p-1 bg-neutral-700 focus:outline-none rounded resize-none"
          placeholder="Type something here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          ref={textAreaRef}
        ></textarea>
      </div>
    </div>
  );
}
