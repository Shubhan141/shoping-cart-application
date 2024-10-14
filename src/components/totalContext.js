import { createContext, useContext, useState } from "react";

// 1. Create context and export it
const totalContext = createContext();
export { totalContext }; // Named export for the context

// 2. Create custom hook for consuming context values
export function useValue() {
  return useContext(totalContext); // Return context object
}

// 3. Create custom provider component for the context
export function TotalItemContent({ children }) {
  // Create state variables
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [cart, setCart] = useState([]); // initial empty array
  // For displaying the cart array
  const [isTrue, setIstrue] = useState(false); // Not visible the cart array
  
  function DisplayCart() {
    setIstrue(!isTrue);
  }

  function handleClearCart() {
    setCart([]); // Clear the cart items
  }

  // Function to delete an item from the cart by index
function handleDel(indexToRemove) {
   console.log("Removing item at index: ", indexToRemove);
 
   // Filter out the item at the provided index
   const updatedCart = cart.filter((_, index) => index !== indexToRemove);
 
   // Update the cart state with the filtered items
   setCart(updatedCart);
 }
 

  // Function to handle adding items
  const handleAdd = (price, name) => {
    setTotal(prevTotal => prevTotal + price);
    setItem(prevItem => prevItem + 1);
    
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === name);

    if (existingItemIndex !== -1) {
      // Item exists, update the quantity
      const updatedCart = cart.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // Item does not exist, add new item
      setCart([...cart, { name: name, price: price, quantity: 1 }]);
    }
  };

  // Function to handle removing items
  const handleRemove = (price, name) => {
    if (total <= 0 || item <= 0) return; // Prevent negative values
    setTotal(prevTotal => prevTotal - price);
    setItem(prevItem => prevItem - 1);
  };

  // Reset function inside the component to access state setters
  function handleClearbtn() {
    setTotal(0); // Reset total to 0
    setItem(0); // Reset item count to 0
  }

  // Provide state and handlers to children
  return (
    <totalContext.Provider
      value={{
        total,
        setTotal,
        item,
        setItem,
        handleAdd,
        handleRemove,
        handleClearbtn,
        cart,
        setCart,
        isTrue,
        setIstrue,
        DisplayCart,
        handleClearCart,
        handleDel,
      }}
    >
      {children}
    </totalContext.Provider>
  );
}
