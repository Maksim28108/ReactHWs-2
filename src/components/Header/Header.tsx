import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { login, logout } from "../../store/authSlice";
import { useTheme } from "../../context/ThemeContext";
import Logo from "../../assets/HeaderPics/Logo.png";
import Cart from "../../assets/HeaderPics/Group.svg";
import styles from "./Header.module.css";

interface NavLink {
  id: number;
  label: string;
  href: string;
}

const links: NavLink[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Menu", href: "/menu" },
  { id: 3, label: "Company", href: "#" },
];

export default function Header() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const cartCount = useAppSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={Logo} alt="Logo" className={styles.LogoPic} />
      </Link>

      <div className={styles.HeaderLinks}>
        <nav>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.id}>
                <Link to={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <button
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      <button
        className={styles.loginBtn}
        onClick={() => dispatch(isLoggedIn ? logout() : login())}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <Link to="/order" className={styles.cartWrapper}>
        <button className={styles.cartButton}>
          <img src={Cart} alt="Cart" className={styles.CartPic} />
        </button>
        <span className={styles.cartCount}>{cartCount}</span>
      </Link>
    </header>
  );
}
