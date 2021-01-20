import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    data: {
      item: {
        name: "",
        images: {
          background: {},
        },
      },
    },
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div>
      <h1>{item.data.item.name}</h1>
      <img src={item.data.item.images.background} alt="item picture" />
    </div>
  );
}

export default ItemDetail;
