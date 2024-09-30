import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedProducts.css';

const featuredProducts = [
  { id: 1, name: 'Cool T-Shirt', price: '$19.99', image: 'path/to/image1.png' },
  { id: 2, name: 'Stylish Jersey', price: '$29.99', image: 'path/to/image2.png' },
  { id: 3, name: 'Warm Jacket', price: '$39.99', image: 'path/to/image3.png' },
];

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    navigate('/product-selection', { state: { productId } }); // Pass productId to the selection page
  };

  return (
    <div className="featured-products-container">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {featuredProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product.id)}>
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
