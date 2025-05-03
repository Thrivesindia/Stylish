import React, { createContext, useContext, useState } from 'react';

// Define the CartItem type
export interface CartItem {
  id: string;
  image: string;
  name: string;
  originalPrice: number;
  price: number;
  rating: number;
  variant: string;
}

// Extend CartItem to include quantity
interface ExtendedCartItem extends CartItem {
  quantity: number;
}

// Define the CartContext type
interface CartContextType {
  cartItems: ExtendedCartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (itemId: string, variant: string) => void;
  decreaseQuantity: (itemId: string, variant: string) => void;
}

// Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to wrap the app
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<ExtendedCartItem[]>([]);

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const key = `${item.id}-${item.variant}`;
      const existingItem = prevItems.find(
        (i) => `${i.id}-${i.variant}` === key
      );

      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map((i) =>
          `${i.id}-${i.variant}` === key
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to increase quantity
  const increaseQuantity = (itemId: string, variant: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.variant === variant
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (itemId: string, variant: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === itemId && item.variant === variant
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove items with quantity 0
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};