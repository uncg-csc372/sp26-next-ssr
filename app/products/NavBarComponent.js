// app/products/NavBarComponent.js
'use client';
import { useState } from 'react';
import { signIn, signOut } from "next-auth/react";
import AddProductComponent from './AddProductComponent';

export default function Navbar({ session }) {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const user = session?.user;
  return (
    <>
      <nav className="products-navigation">
        <ul>
          <li><a href="/products">Home</a></li>
          <li><a href="/products/type/furniture">Furniture</a></li>

          <button onClick={() => setShowAddProduct(true)}>
            {!showAddProduct && 'Add Product'}
          </button>

          {!session ? (
            <button onClick={() => signIn("google")}>Login</button>
          ) : (
            <button onClick={() => signOut()}>Logout ({user.name})</button>
          )}
        </ul>
      </nav>

      {showAddProduct && (
        <>
          <AddProductComponent onClose={() => setShowAddProduct(false)} />
          <button className="cancel-button" onClick={() => setShowAddProduct(false)}>
            Cancel
          </button>
        </>
      )}
    </>
  );
}