import "./App.css";
import { useState } from "react";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
// import TotalItemContent here
import {TotalItemContent} from './components/totalContext.js'

function App() {
  return (
    <TotalItemContent>
      <div className="App">
        <h2>Shopping Cart</h2>
        <Navbar />
        <Items />
      </div>
    </TotalItemContent>
  );
}
export default App;
