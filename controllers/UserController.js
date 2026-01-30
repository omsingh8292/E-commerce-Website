import UserModel from "../models/UserModel.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // create new user
    const newUser = await UserModel.create({ name, email, password });

    res.json({ success: true, message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
