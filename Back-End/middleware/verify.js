// middleware/auth.js
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({
      success: false,
      msg: "Not authorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.secret_key);
    req.user = decoded;
    next();
  } catch (err) {
    return res.json({
      success: false,
      msg: "Invalid token",
    });
  }
};

export default verifyToken;
