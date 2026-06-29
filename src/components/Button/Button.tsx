import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  onClick,
  children,
  className,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn}${className ? " " + className : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
