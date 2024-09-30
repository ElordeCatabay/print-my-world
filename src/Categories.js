import React from 'react';
import './Categories.css'; // Import the CSS file for styling

const categories = [
  'T-Shirt',
  'Jersey',
  'Jacket',
  'Warmer',
  'Polo Shirt',
  'Longsleeves'
];

const Categories = () => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div className="category-card" key={index}>
          <div className="category-image"></div>
          <h3 className="category-title">{category}</h3>
        </div>
      ))}
    </div>
  );
};

export default Categories;
