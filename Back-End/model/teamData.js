import mongoose from "mongoose";

let data = mongoose.Schema({
  name: String,
  role: String,
  email: String,
  initial: String,
});

let teamData = mongoose.model("teaminfo", data);

export default teamData;
