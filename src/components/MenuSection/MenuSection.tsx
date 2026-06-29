import { useState } from "react";
import Button from "../Button/Button";
import MenuLoad from "./MenuApi";
import styles from "./MenuSection.module.css";

const buttons = ["Dessert", "Dinner", "Breakfast"];

export default function Menu() {
  const [active, setActive] = useState("Dessert");

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
            >
              {btn}
            </Button>
          ))}
        </div>
        <MenuLoad category={active} />
      </div>
    </>
  );
}
