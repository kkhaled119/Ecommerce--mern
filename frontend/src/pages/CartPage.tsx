import {
  Box,
  Container,
  Typography,
  Button,
  ButtonGroup,
  IconButton,
} from "@mui/material";
import { useCart } from "../context/cart/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { keyframes } from "@mui/system";
import { useNavigate } from "react-router-dom";

// إنشاء أنميشين للكارت عند التحويم
const hoverEffect = keyframes`
  from {
    transform: scale(1);
    box-shadow: none;
  }
  to {
    transform: scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CartPage = () => {
  const navigate = useNavigate(); // يجب أن يكون هنا داخل الدالة
  const {
    cartItems,
    totalAmount,
    updateItemInCart,
    removeItemInCart,
    clearCart,
  } = useCart();

  const handleClick = () => {
    navigate("/checkout");
  };

  const handleQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      return;
    }
    updateItemInCart(productId, quantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeItemInCart(productId);
  };

  return (
    <Container fixed sx={{ mt: 2 }}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{ mb: 4 }}
      >
        <Typography variant="h4">My Cart</Typography>
        <Button
          onClick={clearCart}
          variant="contained"
          sx={{
            bgcolor: "black",
            color: "white",
            "&:hover": { bgcolor: "green" },
          }}
        >
          Clear Cart
        </Button>
      </Box>
      {cartItems.length ? (
        <Box gap={4} display="flex" flexDirection="column">
          {cartItems.map((item) => (
            <Box
              key={item.productId}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                border: 1,
                borderColor: "#f2f2f2",
                borderRadius: 5,
                padding: 1,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                ":hover": {
                  animation: `${hoverEffect} 0.3s forwards`,
                },
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={3}
              >
                <img
                  src={item.image}
                  width={90}
                  alt={item.title}
                  style={{ borderRadius: "8px" }}
                />
                <Box>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography>
                    {item.quantity} x {item.unitPrice}$
                  </Typography>
                  <IconButton
                    onClick={() => handleRemoveItem(item.productId)}
                    aria-label="Remove Item"
                    color="error"
                  >
                    <FaTrashAlt />
                  </IconButton>
                </Box>
              </Box>
              <ButtonGroup
                variant="outlined"
                aria-label="Basic button group"
                sx={{ backgroundColor: "#f9f9f9", borderRadius: "8px" }}
              >
                <IconButton
                  onClick={() =>
                    handleQuantity(item.productId, item.quantity - 1)
                  }
                  aria-label="Decrease Quantity"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    "&:hover": { bgcolor: "green" },
                  }}
                >
                  <AiOutlineMinus />
                </IconButton>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                  }}
                >
                  {item.quantity}
                </Typography>
                <IconButton
                  onClick={() =>
                    handleQuantity(item.productId, item.quantity + 1)
                  }
                  aria-label="Increase Quantity"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    "&:hover": { bgcolor: "green" },
                  }}
                >
                  <AiOutlinePlus />
                </IconButton>
              </ButtonGroup>
            </Box>
          ))}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Typography variant="h4">
              <Box>Total Amount: {totalAmount} $</Box>
            </Typography>
            <Button
              onClick={handleClick}
              style={{ backgroundColor: "black", color: "white" }}
            >
              Go To Checkout
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography>
          Cart is empty. Please start Shopping and add items
        </Typography>
      )}
    </Container>
  );
};

export default CartPage;
