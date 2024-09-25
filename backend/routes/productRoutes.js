import express from "express";
import formidable from "express-formidable";
import { authenticate, authorizedAdmin } from "../middlewares/authMiddlewar.js";
import {
  addProduct,
  updateProductDetails,
  removeProduct,
  fetchProducts,
  fetchProductById,
  fetchAllProducts,
  addProductReview,
  fetchTopProducts,
  fetchNewProducts
} from "../controllers/productController.js";
import checkId from "../middlewares/checkId.js"; 
const router = express.Router();

router
  .route("/")
  .get(fetchProducts)
  .post(authenticate, authorizedAdmin, formidable(), addProduct);

  router.route("/allproducts").get(fetchAllProducts);
  router.route("/:id/review").post(authenticate,checkId,addProductReview)
  router.route("/top").get(authenticate,fetchTopProducts),
  router.route("/new").get(authenticate,fetchNewProducts),
router
  .route("/:id")
  .get(fetchProductById)
  .put(authenticate, authorizedAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorizedAdmin, removeProduct);


export default router;
