import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./OrderPage.module.css";

export default function OrderPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  const handleOrder = () => {
    if (!street || !house) {
      alert("Please fill in your address");
      return;
    }
    alert("Order placed successfully!");
    dispatch(clearCart());
    setStreet("");
    setHouse("");
  };

  return (
    <>
      <Header />
      <div className={styles.page}>
        <h1 className={styles.title}>Finish your order</h1>

        <div className={styles.items}>
          {items.length === 0 ? (
            <p className={styles.empty}>Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.img} alt={item.meal} className={styles.itemImg} />
                <span className={styles.itemName}>{item.meal}</span>
                <span className={styles.itemPrice}>$ {item.price} USD</span>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                  }
                  className={styles.quantityInput}
                />
                <button
                  className={styles.removeBtn}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  X
                </button>
              </div>
            ))
          )}
        </div>

        <div className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>Street</label>
            <input
              className={styles.input}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>House</label>
            <input
              className={styles.input}
              value={house}
              onChange={(e) => setHouse(e.target.value)}
            />
          </div>
          <button className={styles.orderBtn} onClick={handleOrder}>
            Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
