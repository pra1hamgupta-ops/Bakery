import React from 'react';
import { Link } from 'react-router-dom';
import { CartProvider } from './CartContext';

import './BakeryHomepage.css';

const BakeryHomepage = () => {
  return (
    <CartProvider>
      <div className="bakery-homepage">
        <h1>Welcome to Our Bakery</h1>
        <div className="products">
          <Product 
            name="Chocolate Cake"
            description="Delicious chocolate cake made with the finest ingredients"
            imageUrl="/images/chocolate-cake.jpg"
          />
          <Product 
            name="Blueberry Muffins"
            description="Freshly baked blueberry muffins bursting with flavor"
            imageUrl="/images/blueberry-muffins.jpg"
          />
          <Product 
            name="Cinnamon Rolls"
            description="Warm and gooey cinnamon rolls, the perfect breakfast treat"
            imageUrl="/images/cinnamon-rolls.jpg"
          />
          <Product 
            name="Cupcakes"
            description="Adorable and tasty cupcakes in a variety of flavors"
            imageUrl="/images/cupcakes.jpg"
          />
        </div>
        <Link to="/checkout">
          <button className="checkout-button">Checkout</button>
        </Link>
      </div>
    </CartProvider>
  );
};

export default BakeryHomepage;