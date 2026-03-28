import express from "express";
import cors from "cors";
import home from "./Routes/authRoute.js";
import "dotenv/config";
import mongooseConnect from "./dataBase/connectDb.js";
import cloudinaryConnect from "./middleware/cloudinary.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongooseConnect();
cloudinaryConnect();

app.use(home);

app.listen(8000, () => {
  console.log("Working");
});
