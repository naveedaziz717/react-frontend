interface SingleNavItemProps {
  children: string;
}

export const SingleNavItem = ({ children }: SingleNavItemProps) => {
  return (
    <div>
      <a
        href="#"
        className="text-gray-300 hover:text-white p-3 rounded-md font-medium"
      >
        {children}
      </a>
    </div>
  );
};
