import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [ite, setIte] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    setIte(items.data);
  };

  return (
    <div>
      <h1>Products names:</h1>
      {ite.map((item) => {
        return (
          <h5 key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
          </h5>
        );
      })}
    </div>
  );
}

export default Shop;
