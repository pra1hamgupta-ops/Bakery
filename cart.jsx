import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const deleteFromCart = (product) => {
    setCart(cart.filter((p) => p.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
