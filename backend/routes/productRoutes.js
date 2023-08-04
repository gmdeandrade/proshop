import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, admin, createProduct).get(getProducts);

router.route("/:id").get(getProductById);

export default router;
