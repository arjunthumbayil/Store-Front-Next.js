import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  return (
    <>
      <Head>
        <title>{title ? title + " - Kreate." : "Kreate."}</title>
        <meta name="description" content="Ecommerce Website" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {"flex w-auto flex-col justify-between"} */}
      {/* {"flex h-12 w-auto items-center px-4 justify-between shadow-md"} */}
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link legacyBehavior href="/">
              <a className="text-lg font-bold">kreate.</a>
            </Link>
            <div>
              <Link legacyBehavior href="/cart">
                <a className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white sm:ml-auto">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              <Link legacyBehavior href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 Kreate.</p>
        </footer>
      </div>
    </>
  );
}
