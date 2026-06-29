import styles from "./Button.module.css";

export default function Button({ onClick, children, className, disabled }) {
  return (
    <button className={`${styles.btn}${className ? " " + className : ""}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
