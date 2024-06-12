const User = require("../models/user");

class UserService {
  static async getAllUsers() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async getUserById(id){
    try {
        const user = await User.findById(id);
        if (!user) {
          throw new Error('no user');
        }
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
  }

  static async createUser(userData) {
    const { username, email, password } = userData;
    const user = new User({
      username,
      email,
      password,
    });

    try {
      return await user.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = UserService;