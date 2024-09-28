import { Box, Typography } from "@mui/material";
import { useAuth } from "../context/Auth/AuthContext";
import { useCart } from "../context/cart/CartContext";

const CartPage = () => {
  // Use the hooks inside the component
  const { token } = useAuth(); // Destructuring from useAuth
  const { cartItems, totalAmount } = useCart(); // Destructuring from useCart

  return (
    <Box>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Box
            key={item.id}
            sx={{ padding: 2, borderBottom: "1px solid #ccc" }}
          >
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body1">Price: ${item.price}</Typography>
            <Typography variant="body2">Quantity: {item.quantity}</Typography>
          </Box>
        ))
      ) : (
        <Typography variant="h6">Your cart is empty</Typography>
      )}
      <Box mt={2}>
        <Typography variant="h6">Total Amount: ${totalAmount}</Typography>
      </Box>
    </Box>
  );
};

export default CartPage;
