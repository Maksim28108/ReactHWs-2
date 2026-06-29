import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/cartSlice";
import Button from "../Button/Button";
import styles from "./MenuSection.module.css";

interface MenuCardProps {
  id: string;
  img: string;
  meal: string;
  price: number;
}

export default function MenuCard({ id, img, meal, price }: MenuCardProps) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, img, meal, price, quantity }));
  };

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
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className={styles.cardInput}
          />
          <Button className={styles.cardButton} onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
