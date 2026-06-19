import { useState } from "react";
import Header from "../components/Header/Header";
import Menu from "../components/MenuSection/MenuSection";
import Footer from "../components/Footer/Footer";

export default function MenuPage() {
  const [count, setCount] = useState(0);
  const addToCart = (quantity) => setCount((c) => c + quantity);
  return (
    <>
      <Header count={count} />
      <Menu addToCart={addToCart} />
      <Footer />
    </>
  );
}
