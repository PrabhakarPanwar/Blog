import express from "express";
import { blog, data, login, team } from "../controller/authController.js";
import { upload } from "../middleware/multer.js";
import verifyToken from "../middleware/verify.js";

let home = express.Router();

home.post("/login", login);
home.post("/blogdata", upload.single("img"), blog);
home.post("/teamdata", team);
home.get("/dashboard", verifyToken, (req, res) => {
  res.json({ success: true, msg: "Token Verified" });
});
home.get("/data", data);

export default home;
