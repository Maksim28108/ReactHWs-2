import styles from "./Button.module.css";

export default function Button({ onClick, children, className, disabled }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
