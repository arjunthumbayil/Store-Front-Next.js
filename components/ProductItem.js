/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../utils/Store";

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.name === product.name);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.id + 5 < quantity) {
      alert("Sorry. No more products in stock.");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <div className="card">
      <Link legacyBehavior href={`/product/${product.name}`}>
        <a>
          <img
            src={product.imageURL}
            alt={product.name}
            className="rounded shadow object-cover h-64 w-full"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5 ">
        <Link legacyBehavior href={`/product/${product.name}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.type}</p>
        <p>₹{product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={addToCartHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
