import { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import Button from "../Button/Button";
import useFetch from "../../hooks/useFetch";
import styles from "./MenuSection.module.css";

export default function MenuLoad({ addToCart, category }) {
  const { data: meals } = useFetch(
    "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals"
  );
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    setVisible(6);
  }, [category]);

  const filtered = (meals || []).filter((m) => m.category === category);

  return (
    <div>
      <div className={styles.grid}>
        {filtered.slice(0, visible).map((meal) => (
          <MenuCard
            key={meal.id}
            img={meal.img}
            meal={meal.meal}
            price={meal.price}
            addToCart={addToCart}
          />
        ))}
      </div>

      <div className={styles.seeMore}>
        {visible < filtered.length ? (
          <Button
            className={styles.seeMoreBtn}
            onClick={() => setVisible((current) => current + 6)}
            children={"See more"}
          />
        ) : (
          <p>No more items</p>
        )}
      </div>
    </div>
  );
}
