import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, promo = null) => {
  setCartItems(prev => {
    
    const existing = prev.find(
      item => item.id === product.id && item.promo?.id === promo?.id
    );

    if (existing) {
      return prev.map(item =>
        item.id === product.id && item.promo?.id === promo?.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, promo: promo || null, quantity: 1 }];
  });
};

  const removeFromCart = (id) => {
    setCartItems(prev =>
      prev.filter(item => String(item.id) !== String(id))
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
