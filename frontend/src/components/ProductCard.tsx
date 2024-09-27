import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface props {
  _id: string;
  title: string;
  image: string;
  price: string;
}

export default function ProductCard({ price, title, image }: props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardMedia sx={{ height: 240 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "black",
            color: "#fff",
            "&:hover": {
              backgroundColor: "green",
              color: "#fff",
            },
          }}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
