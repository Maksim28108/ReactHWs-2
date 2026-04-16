import { useState } from "react";
import Button from "../Button/Button";
import styles from "./MenuSection.module.css";

export default function MenuCard({ img, meal, price, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={styles.card}>
      <img src={img} alt={meal} width={120} height={120} />
      <div className={styles.cardBody}>
        <div className={styles.cardTop}>
          <h3 className={styles.mealName}>{meal}</h3>
          <span>${price}USD</span>
        </div>
        <p className={styles.cardText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className={styles.cardBottom}>
          <input
            type="number"
            min={1}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={styles.cardInput}
          />
          <Button
            children={"Add to cart"}
            className={styles.cardButton}
            onClick={() => addToCart(quantity)}
          />
        </div>
      </div>
    </div>
  );
}
