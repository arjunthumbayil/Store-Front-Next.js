import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { newdata } from "../../utils/newdata";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../utils/Store";

export default function ProductScreen() {

  const [data, setData] = useState([]);

  useEffect(() => {
    newdata().then((response) => setData(response));
  }, []);


  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { query } = useRouter();
  const { name } = query;
  const product = data.find((x) => x.name === name);
  if (!product) {
    return <div>Produt Not Found</div>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.name === product.name);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.id + 5 < quantity) {
      alert("Sorry. No more products in stock.");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push('/cart');
  };
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img
            style={{ width: "640", height: "640", layout: "responsive" }}
            src={product.imageURL}
            alt={product.name}
          ></img>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.gender}</li>
            <li>Brand: {product.type}</li>
            <li>Description: {product.color}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>₹{product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.quantity > 0 ? "In stock" : "Unavailable"}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
