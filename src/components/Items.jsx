import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
// import data from the data folder
import data from "../data/itemData.js";
console.log("data is ", data);
function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((curObj) => {
       return  ( <ItemCard name={curObj.name} price={curObj.price} key={curObj.id} image={curObj.image} />);
      })}
    </div>
  );
}

export default Items;
