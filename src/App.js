import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductsContextProvider from "./Global/ProductContext";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
