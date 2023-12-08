const User = require("../models/user");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const result = validateNewUser(req.body);

    if (result.error) {
      return res.status(400).json({ error: result.error.details[0].message });
    }

    const { username, password, confirmPassword, birthday } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Error duplicate user" });
    }

    user = new User({
      username,
      password,
      birthday,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};




const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // Include the role in the response
    res.status(200).json({ message: "Login successful", role: user.role, user: user._id });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const validateNewUser = (data) => {
  // Implement your validation logic here
  // Example using Joi for validation:
  const Joi = require("joi");

  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
    birthday: Joi.date().iso().required(),
  });

  return schema.validate(data);
};

const fetch = async (req, res) => {
  const users = await User.find({});
  res.send(users);
};

module.exports = { signup, login, fetch };
