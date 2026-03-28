import mongoose from "mongoose";

const blogContentSchema = new mongoose.Schema({
  type: { type: String },
  text: { type: String },
});

let data = mongoose.Schema({
  id: Number,
  imagelink: String,
  title: String,
  description: String,
  category: String,
  tag: [String],
  blogcontent: [blogContentSchema],
});

let blogData = mongoose.model("blogdetail", data);

export default blogData;
