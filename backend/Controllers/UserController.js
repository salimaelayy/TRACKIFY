const User = require("../Schemas/User");
const cloudinary = require("../utils/cloudinary");
const bcrypt = require("bcrypt");
const { CreateToken } = require("../MiddleWares/CreateToken");

const register = async (req, res, next) => {
  try {
    const { username, password, email, country, fullname, birthdate } =
      req.body;

    if (
      !username ||
      !password ||
      !email ||
      !country ||
      !fullname ||
      !birthdate
    ) {
      return res
        .status(400)
        .json({ message: "Please provide valid information" });
    }

    // Hash the password
    const hashPass = await bcrypt.hash(password, 10);

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = await User.create({
      username,
      email,
      password: hashPass,
      country,
      fullname,
      birthdate
    });

    const accessToken = CreateToken(newUser);

    res.cookie("access-token", accessToken, { maxAge: 2 * 60 * 60 , httpOnly: true });

    return res.status(201).json({
      accessToken,
      id: newUser._id,
      data: newUser,
      message: "New user created successfully",
    });
  } catch (error) {
    console.error("Error while registering user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const readall = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.json({ data: users });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const readbyid = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

const readbyname = async (req, res, next) => {
  try {
    const { username } = req.query;
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(404)
        .json({ message: "No user found with the given username" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    console.error("Error reading user by username:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const updatebyid = async (req, res) => {
  const userId = req.params.id;
  console.log(req.file);
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Request body is missing" });
    }

    const { username, email, country, fullname, birthdate } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.country = country || user.country;
    user.fullname = fullname || user.fullname;
    user.birthdate = birthdate || user.birthdate;

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);

      user.picture = result.secure_url;
    }

    const updatedUser = await user.save();
    return res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const changePassword = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const userId = req.params.id;

  try {
    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(user.password)
    console.log(oldPassword)
    // Verify the old password
    const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordCorrect) {
      console.error('Incorrect old password');
      return res.status(401).json({ message: "Incorrect old password" });
    }

    // Hash the new password
    const hashNewPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashNewPassword;
    await user.save();

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


const deletebyid = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json({
      message: "User is deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  register,
  readall,
  readbyid,
  readbyname,
  updatebyid,
  deletebyid,
  changePassword,
};
