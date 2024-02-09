interface DropDownItemProps {
  children: string;
}

export const DropDownItem = ({ children }: DropDownItemProps) => {
  return (
    <li>
      <a
        href="#"
        className="block p-2 border-b hover:bg-primary rounded hover:text-white"
      >
        {children}
      </a>
    </li>
  );
};
