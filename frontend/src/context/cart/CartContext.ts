import { createContext, useContext } from "react";
import { CartItem } from "../../types/CartItem";

interface CartContextType {
  cartItems: CartItem[];
  totalAmoutn: number;
  addItemToCart: (productId: string) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  totalAmoutn: 0,
  addItemToCart: () => {},
});

export const useCart = () => useContext(CartContext);
