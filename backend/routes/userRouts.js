import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById
} from "../controllers/userControllers.js";
import { authenticate, authorizedAdmin } from "../middlewares/authMiddlewar.js";
const router = express.Router();

// routes
router
  .route("/")
  .post(createUser)
  .get(authenticate, authorizedAdmin, getAllUsers);
router.post("/auth", loginUser); //login
router.post("/logout", logoutCurrentUser);
router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

// Admin rooute 👇
router
  .route("/:id")
  .delete(authenticate, authorizedAdmin, deleteUserById)
  .get(authenticate, authorizedAdmin, getUserById).put(authenticate,authorizedAdmin,updateUserById)

export default router;
