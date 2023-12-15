interface ButtonProps {
  children?: React.ReactNode;
  style?: string;
  toastConfiguration?: () => void;
}

export default function Button({
  children = "Click",
  style,
  toastConfiguration,
}: ButtonProps) {
  return (
    <button className={style} onClick={toastConfiguration}>
      {children}
    </button>
  );
}
