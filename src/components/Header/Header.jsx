import Logo from "../../assets/HeaderPics/Logo.png";
import Cart from "../../assets/HeaderPics/Group.svg";
import styles from "./Header.module.css";

const links = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "Menu", href: "#" },
  { id: 3, label: "Company", href: "#" },
  { id: 4, label: "Login", href: "#" },
];

export default function Header({ count }) {
  return (
    <header className={styles.Header}>
      <img src={Logo} alt="Logo" className={styles.LogoPic} />

      <div className={styles.HeaderLinks}>
        <nav>
          <ul className={styles.NavList}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.cartWrapper}>
        <button className={styles.CartButton} aria-label="Cart">
          <img src={Cart} alt="" className={styles.CartPic} />
        </button>
        <span className={styles.cartCount}>{count}</span>
      </div>
    </header>
  );
}
