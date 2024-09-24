import productModel from "../models/prodectModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedIntialProducts = async () => {
  try {
    const products = [
      {
        title: "head phone",
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 250,
        stock: 53,
      },
    ];

    const existingProducts = await getAllProducts();
    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("cannot seed database", err);
  }
};
