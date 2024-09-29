import { Box, Container, Typography } from "@mui/material";
import { useCart } from "../context/cart/CartContext";
import { Button, ButtonGroup } from "@mui/material";

const CartPage = () => {
  const { cartItems, totalAmount } = useCart();

  return (
    <Container fixed sx={{ mt: 2 }}>
      <Typography variant="h4">My Cart</Typography>
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
            }}
          >
            <Box display="flex" flexDirection="row" alignItems="center" gap={3}>
              <img src={item.image} width={90} alt={item.title} />
              <Box>
                <Typography variant="h5"> {item.title}</Typography>
                <Typography>
                  {item.quantity} x {item.unitePrice || item.price}$
                </Typography>
                <Button>remove</Button>
              </Box>
            </Box>
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button>-</Button>
              <Button>+</Button>
            </ButtonGroup>
          </Box>
        ))}
        <Typography variant="h4">
          {" "}
          <Box>Total Amount:{totalAmount} $</Box>
        </Typography>
      </Box>
    </Container>
  );
};

export default CartPage;
