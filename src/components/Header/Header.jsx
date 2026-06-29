import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/HeaderPics/Logo.png";
import Cart from "../../assets/HeaderPics/Group.svg";
import styles from "./Header.module.css";
import { login, logout } from "../../store/authSlice";

const links = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Menu", href: "/menu" },
  { id: 3, label: "Company", href: "#" },
];

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="" className={styles.LogoPic} />
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
        className={styles.loginBtn}
        onClick={() => dispatch(isLoggedIn ? logout() : login())}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <Link to="/order" className={styles.cartWrapper}>
        <button className={styles.cartButton}>
          <img src={Cart} alt="" className={styles.CartPic} />
        </button>
        <span className={styles.cartCount}>{cartCount}</span>
      </Link>
    </header>
  );
}
