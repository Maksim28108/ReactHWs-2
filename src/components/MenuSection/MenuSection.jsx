import { useState } from "react";
import Button from "../Button/Button";
import MenuLoad from "./MenuApi";
import styles from "./MenuSection.module.css";

export default function Menu({ addToCart }) {
  const buttons = ["Desert", "Dinner", "Breakfast"];
  const [active, setActive] = useState("Desert");
  return (
    <>
      <div className={styles.menuSection}>
        <h1 className={styles.menuTitle}>Browse our menu</h1>
        <p className={styles.menuText}>
          Use our menu to place an order online, or <span>phone</span> our store
          to place a pickup order. Fast and fresh food.
        </p>

        <div className={styles.menuButtons}>
          {buttons.map((btn) => (
            <Button
              key={btn}
              className={active === btn ? styles.activeBtn : styles.inactiveBtn}
              onClick={() => setActive(btn)}
              disabled={btn !== "Desert"}
            >
              {btn}
            </Button>
          ))}
        </div>
        <MenuLoad addToCart={addToCart} />
      </div>
    </>
  );
}
