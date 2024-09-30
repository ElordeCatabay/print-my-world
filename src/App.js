// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import LatestProducts from './LatestProducts';
import Cart from './Cart';
import ProductSelection from './ProductSelection'; // Import the ProductSelection component
import { CartProvider } from './CartContext'; // Import the CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <Categories />
              <FeaturedProducts />
              <LatestProducts />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-selection" element={<ProductSelection />} /> {/* Route for ProductSelection */}
          {/* Add other routes here */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
