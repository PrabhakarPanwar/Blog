import mongoose from "mongoose";

let mongooseConnect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/blog");
  console.log("MongoDB Connected");
};

export default mongooseConnect;
