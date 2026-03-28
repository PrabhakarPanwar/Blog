import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";
import blogData from "../model/blogData.js";
import teamData from "../model/teamData.js";

export const login = (req, res) => {
  const { name, pwd } = req.body;
  if (name == process.env.logName && pwd == process.env.logPwd) {
    const token = jwt.sign({ pwd }, process.env.secret_key, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
    });
    return res.json({
      success: true,
      msg: "Successfully Login",
    });
  }
  res.json({
    success: false,
    msg: "Wrong Credentials",
  });
};

//Creating The DataBase

export const blog = async (req, res) => {
  const { id, title, description, category, tag, blogcontent } = req.body;
  if (
    !id ||
    !title ||
    !description ||
    !category ||
    !tag ||
    !blogcontent ||
    !imagelink
  ) {
    return res.json({
      success: false,
      msg: "All Details Must Be Filled",
    });
  }
  const image = req.file.path;
  let result = await cloudinary.uploader.upload(image);
  const img = result.secure_url;
  await blogData.create({
    id,
    title,
    description,
    category,
    tag,
    blogcontent,
    imagelink: img,
  });
  res.json({
    success: true,
    msg: "Successfully Added The Blog",
  });
};

export const team = async (req, res) => {
  const { name, role, email, initial } = req.body;
  if (!name || !role || !email || !initial) {
    return res.json({
      success: false,
      msg: "All Details Must Be Filled",
    });
  }
  teamData.create({
    name,
    role,
    email,
    initial,
  });
  res.json({
    success: true,
    msg: "Successfully Added The Team Member",
  });
};

// Deleting The DataBase

// Sending DataBase To The Front-End

export const data = async (req, res) => {
  const blog = await blogData.find();
  const team = await teamData.find();

  res.json({
    blog,
    team,
  });
};
