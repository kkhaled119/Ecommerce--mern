import { FC, PropsWithChildren, useState } from "react";
import { CartItem } from "../../types/CartItem";
import { CartContext } from "./CartContext";

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalAmoutn, setTotalAmout] = useState<number>(0);

  const addItemToCart = (productId: string) => {
    console.log(productId);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalAmoutn, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
