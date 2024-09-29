// CheckoutPage.tsx

import { Container, Typography, Button } from "@mui/material";
import { useCart } from "../context/cart/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, totalAmount, clearCart } = useCart();
  const navigate = useNavigate();

  const handleFinishCheckout = () => {
    clearCart();
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Checkout
      </Typography>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <Typography key={item.productId}>
              {item.title} - {item.quantity} x {item.unitPrice}$
            </Typography>
          ))}
          <Typography variant="h5" sx={{ mt: 2 }}>
            Total Amount: {totalAmount} $
          </Typography>
          <Button
            onClick={handleFinishCheckout}
            variant="contained"
            sx={{ mt: 2 }}
          >
            Pay Now
          </Button>
        </div>
      ) : (
        <Typography>Your cart is empty!</Typography>
      )}
    </Container>
  );
};

export default CheckoutPage;
