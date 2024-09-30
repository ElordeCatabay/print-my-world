import React, { useState } from 'react';
import { useCart } from './CartContext'; // Import the useCart hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ProductSelection.css'; // Import CSS for styling

const ProductSelection = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const { addToCart } = useCart(); // Access addToCart from context
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleAddToCart = () => {
    // Logic to add the selected product to the cart
    const item = { size: selectedSize, color: selectedColor };
    addToCart(item); // Add the item to the cart context
    console.log(`Added to cart: Size - ${selectedSize}, Color - ${selectedColor}`);
    
    // Navigate to the cart page
    navigate('/cart');
  };

  return (
    <div className="product-selection-container">
      <h2>Select Your Product</h2>
      <div className="product-image">
        <img src="path/to/your/product-image.png" alt="Product" />
      </div>
      <div className="selection-options">
        <div className="size-selection">
          <h3>Select Size</h3>
          <select value={selectedSize} onChange={handleSizeChange}>
            <option value="">Choose a size...</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </div>
        <div className="color-selection">
          <h3>Select Color</h3>
          <div className="color-options">
            <label>
              <input
                type="radio"
                value="red"
                checked={selectedColor === 'red'}
                onChange={handleColorChange}
              />
              <span className="color-swatch red"></span> Red
            </label>
            <label>
              <input
                type="radio"
                value="blue"
                checked={selectedColor === 'blue'}
                onChange={handleColorChange}
              />
              <span className="color-swatch blue"></span> Blue
            </label>
            <label>
              <input
                type="radio"
                value="green"
                checked={selectedColor === 'green'}
                onChange={handleColorChange}
              />
              <span className="color-swatch green"></span> Green
            </label>
            <label>
              <input
                type="radio"
                value="black"
                checked={selectedColor === 'black'}
                onChange={handleColorChange}
              />
              <span className="color-swatch black"></span> Black
            </label>
          </div>
        </div>
      </div>
      {/* Place the button here to position it below the color selection */}
      <button className="add-to-cart-button" onClick={handleAddToCart} disabled={!selectedSize || !selectedColor}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductSelection;
