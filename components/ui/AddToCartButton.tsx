"use client";

import { useCart } from "@/components/store/CartContext";

type Props = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Any "PEDIR AHORA" / "AGREGAR" call-to-action. Styling is passed in so the
 * same behaviour is shared across cards, offers and the pizza builder.
 */
export default function AddToCartButton({ className = "", children }: Props) {
  const { addToCart } = useCart();
  return (
    <button type="button" onClick={addToCart} className={className}>
      {children}
    </button>
  );
}
