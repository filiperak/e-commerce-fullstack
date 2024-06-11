const UserService = require("../services/user");

const getAllUsers = async (req, res) => {
  try {
    const user = await UserService.getAllUsers();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
}

const createUser = async (req, res) => {
  try {
    const newUser = await UserService.createUser(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
