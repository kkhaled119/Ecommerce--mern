import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import cartRouter from "./routes/cartRoute";
import { seedIntialProducts } from "./services/productService";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

const port = 3002;

app.use(express.json());

console.log(process.env.DATABASE_URL);

mongoose
  .connect(process.env.DATABASE_URL || "")
  .then(() => console.log("Mongo conected"))
  .catch((err) => console.log("Faild", err));

//Seed the product to datapase
seedIntialProducts();
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRouter);

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
