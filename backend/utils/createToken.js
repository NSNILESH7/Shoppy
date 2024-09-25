import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SEC, { expiresIn: "30d" });

  //set jwt cookie as httpOnly

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    samesite: "secret",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  return token;
};
export default generateToken;
