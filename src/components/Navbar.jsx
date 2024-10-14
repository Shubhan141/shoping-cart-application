import React from "react";
import styles from "../styles/Total.module.css";
import CartModals from "./CartModals";
// Consume the value of state variables using custom hook
import { useValue } from "./totalContext";

function Navbar() {
  // Consume the context values
  const { item, total, setTotal, setItem, handleClearbtn ,cart,setCart, isTrue, DisplayCart} = useValue();
  console.log("Total and Items:", total, item);

  return (
    <div className={styles.container}>
      <h1>Total: &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button className={styles.ResetBtn}onClick={DisplayCart} >Cart</button>
      <button className={styles.ResetBtn} onClick={handleClearbtn}>Reset</button>
      <CartModals/>
    </div>
  );
}

export default Navbar;
