import express from "express";
import products from "./data/products.js";
import "dotenv/config";

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(port, () => {
  console.log(`Serve running on http://localhost:${port}`);
});
