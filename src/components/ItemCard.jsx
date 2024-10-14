import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "./totalContext";

function ItemCard({ name, price, image }) {
  const { handleAdd, handleRemove } = useValue();

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.imageDiv}>
        <img src={image} alt={name} /> {/* Added alt attribute */}
      </div>
     <div className={styles.content}>
     <div className={styles.itemPrice}>&#x20B9; {price}
        <span> &nbsp;  &nbsp;  &nbsp; <a href="#" style={{fontSize:'0.8rem', fontWeight:'300', textDecoration:'none'}}>Get Discount</a></span>
      </div>
      <div className={styles.itemButtonsWrapper}>
        <button
          className={styles.itemButton}
          onClick={() => handleAdd(price, name)}
        >
          Add
        </button>
        <button
          className={styles.itemButton}
          onClick={() => handleRemove(price, name)}
        >
          Remove
        </button>
      </div>
      <div className={styles.simiInfo}>Find similer to it</div>
     </div>
    </div>
  );
}

export default ItemCard;
