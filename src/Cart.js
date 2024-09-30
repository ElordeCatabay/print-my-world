// src/Cart.js
import React from 'react';
import { useCart } from './CartContext'; // Import the useCart hook
import './Cart.css'; // Import the CSS for styling

const Cart = () => {
  const { cartItems } = useCart(); // Get cart items from context

  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>; // Message for empty cart
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Cart</h1>
      </div>
      {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src="path/to/product-image.png" alt="Product" />
          <div className="cart-item-details">
            <h3>{`Size: ${item.size}`}</h3>
            <p>{`Color: ${item.color}`}</p>
            <p>{`Price: $XX.XX`}</p> {/* Replace with actual price if available */}
          </div>
        </div>
      ))}
      <div className="cart-footer">
        <div className="total-price">{`Total: $XX.XX`}</div> {/* Replace with total calculation */}
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
