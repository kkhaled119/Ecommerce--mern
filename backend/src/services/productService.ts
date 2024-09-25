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
      {
        title: "Dell laptop",
        image:
          "https://plus.unsplash.com/premium_photo-1675538078410-2cec60aa046c?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1250,
        stock: 13,
      },
      {
        title: "Smart Watch",
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        stock: 5,
      },
      {
        title: "Mack Book",
        image:
          "https://plus.unsplash.com/premium_photo-1681702114246-ffe628203982?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 900,
        stock: 10,
      },
      {
        title: "Camera",
        image:
          "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 600,
        stock: 10,
      },

      {
        title: "AirPods",
        image:
          "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 900,
        stock: 20,
      },
      {
        title: "Perfume",
        image:
          "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?q=80&w=3079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 300,
        stock: 10,
      },
      {
        title: "Sun Glasses",
        image:
          "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
        stock: 30,
      },
      {
        title: "White Sneaker",
        image:
          "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 90,
        stock: 30,
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
