import { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import Button from "../Button/Button";
import styles from "./MenuSection.module.css";

export default function MenuLoad({ category }) {
  const [meals, setMeals] = useState([]);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);

  useEffect(() => {
    setVisible(6);
  }, [category]);

  const filtered = meals.filter((m) => m.category === category);

  return (
    <div>
      <div className={styles.grid}>
        {filtered.slice(0, visible).map((meal) => (
          <MenuCard
            key={meal.id}
            id={meal.id}
            img={meal.img}
            meal={meal.meal}
            price={meal.price}
          />
        ))}
      </div>
      <div className={styles.seeMore}>
        {visible < filtered.length ? (
          <Button
            className={styles.seeMoreBtn}
            onClick={() => setVisible((current) => current + 6)}
          >
            See more
          </Button>
        ) : (
          <p>No more items</p>
        )}
      </div>
    </div>
  );
}
