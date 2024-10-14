import React from "react";
import "./CartModal.css";
import { useValue } from "./totalContext";

export default function CartModals() {
  const { isTrue, total, cart, handleClearCart, DisplayCart,handleDel } = useValue();
  
  return (
    <div
      className="cartContainer"
      style={isTrue ? { display: "block" } : { display: "none" }}
    >
      <div className="btn">
        {/* clear cart container */}
        <button className="clearBtn" onClick={handleClearCart}>
          Clear
        </button>
        {/* it will take me into the original page cartContainer display none */}
        <button className="closeBtn" onClick={DisplayCart}>
          CloseBtn
        </button>
      </div>
      <div>
      {/* const data = [
  { id: 1,
    name: 'T-shirt',
    price: 100,
  },
      ] */}
        {cart.map((items,index) => {
          return (
            <li key={index} className="liItems">
              {items.name}&nbsp;&nbsp;  quantity :{items.quantity}  &nbsp; &nbsp; Price: {items.price} &nbsp;  &nbsp;
              <button className="cartbtn" onClick={() => handleDel(index)}>Delete</button>
            </li>
          );
        })}
      </div>
      <h3 className="total">Total : &nbsp;&nbsp; {total}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="payBtn">PayNow</button></h3> 
    </div>
  );
}
