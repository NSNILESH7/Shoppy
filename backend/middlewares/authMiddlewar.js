import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHnndler from "./asyncHandler.js";

let authenticate = asyncHnndler(async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWT_SEC);
      req.user = await User.findById(decode.userId).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("NOT AUTHORIZED ,token failed");
    }
  } else {
    res.status(401);
    throw new Error("NOT AUTHORIZED, no token");
  }
});

// check for admin
const authorizedAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("not authorized as an admin.");
  }
};
export { authenticate, authorizedAdmin };
