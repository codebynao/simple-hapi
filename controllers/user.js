const UserModel = require('../models/User')

class User {
  async createUser(req, h) {
    const user = await UserModel.create(req.payload)
    return { code: 201, data: user }
  }

  async getAllUsers(req, h) {
    return { code: 200, data: await UserModel.find({}) }
  }
}

module.exports = new User()
