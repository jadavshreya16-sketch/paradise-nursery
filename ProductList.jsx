import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsData = [
  // Indoor Plants
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 2, name: "Peace Lily", price: 20, category: "Indoor" },
  { id: 3, name: "Areca Palm", price: 25, category: "Indoor" },
  { id: 4, name: "Spider Plant", price: 10, category: "Indoor" },
  { id: 5, name: "Rubber Plant", price: 18, category: "Indoor" },
  { id: 6, name: "ZZ Plant", price: 22, category: "Indoor" },

  // Succulents
  { id: 7, name: "Aloe Vera", price: 12, category: "Succulents" },
  { id: 8, name: "Echeveria", price: 14, category: "Succulents" },
  { id: 9, name: "Jade Plant", price: 16, category: "Succulents" },
  { id: 10, name: "Cactus", price: 10, category: "Succulents" },
  { id: 11, name: "Haworthia", price: 13, category: "Succulents" },
  { id: 12, name: "Sedum", price: 11, category: "Succulents" },
];

function ProductList() {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const [addedItems, setAddedItems] = useState({});

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.id]: true }));
  };

  const categories = ["Indoor", "Succulents"];

  return (
    <div>
      {/* 🔹 NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#ddd" }}>
        <div>
          <a href="/">Home</a> | <a href="/plants">Plants</a> | <a href="/cart">Cart</a>
        </div>
        <div>
          🛒 Cart: {totalQuantity}
        </div>
      </nav>

      <h1>Our Plants</h1>

      {/* 🔹 PRODUCTS */}
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            {plantsData
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAdd(plant)}
                    disabled={addedItems[plant.id]}
                  >
                    {addedItems[plant.id] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
