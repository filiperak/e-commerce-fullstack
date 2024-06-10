const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const user = newUser({
    username: req.body.username,
    email: req.body.username,
    password: req.body.password,
  });
  try {
    const newUser = await user.save()
    res.status(200).json(newUser)
  } catch (error) {

  }
};

module.exports = {
  getAllUsers,
};
