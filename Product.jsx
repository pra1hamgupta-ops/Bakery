import React from 'react';

import './Product.css';

const Product = (props) => {
  return (
    <div className="product">
      <img src={props.imageUrl} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <button>Add to Cart</button>
      <button>Delete from Cart</button>
    </div>
  );
};

export default Product;
