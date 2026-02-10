"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type CartContextValue = {
  cartCount: number;
  loggedIn: boolean;
  addToCart: () => void;
  login: () => void;
  toggleLogin: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const addToCart = useCallback(() => setCartCount((c) => c + 1), []);
  const login = useCallback(() => setLoggedIn(true), []);
  const toggleLogin = useCallback(() => setLoggedIn((v) => !v), []);

  const value = useMemo(
    () => ({ cartCount, loggedIn, addToCart, login, toggleLogin }),
    [cartCount, loggedIn, addToCart, login, toggleLogin],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
