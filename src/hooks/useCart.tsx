import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";

export default function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
