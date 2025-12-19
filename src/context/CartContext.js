import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 0 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId, amount) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + amount } : item
    ));
  };

  const setQuantity = (productId, newQuantity) => {
    const qty = Math.max(0, parseInt(newQuantity) || 0);
    setCart(prevCart => prevCart.map(item =>
      item.id === productId ? { ...item, quantity: qty } : item
    ));
  };

  const updatePrice = (productId, newPrice) => {
    const price = Math.max(0, parseFloat(newPrice) || 0);
    setCart(prevCart => prevCart.map(item =>
      item.id === productId ? { ...item, price } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, setQuantity, updatePrice }}>
      {children}
    </CartContext.Provider>
  );
};