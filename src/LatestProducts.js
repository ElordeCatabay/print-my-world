import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './FeaturedProducts.css'; // Import CSS for styling

const latestProducts = [
  { id: 1, name: 'Cool Sneakers', price: '$49.99', image: 'path/to/image1.png' },
  { id: 2, name: 'Trendy Hat', price: '$15.99', image: 'path/to/image2.png' },
  { id: 3, name: 'Stylish Backpack', price: '$34.99', image: 'path/to/image3.png' },
];

const LatestProducts = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle adding to cart
  const handleAddToCart = (productId) => {
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="latest-products-container">
      <h2>Latest Products</h2>
      <div className="products-grid">
        {latestProducts.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(product.id)}>
              +
            </button> {/* Plus button with class for styling */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
