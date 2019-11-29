'use strict'

const UserController = require('../controllers/user')
const User = {
  name: 'User',
  version: '1.0.0',

  register: async (server, options) => {
    server.route([
      {
        method: 'POST',
        path: '/user',
        config: { auth: false },
        handler: async (req, h) => {
          return await UserController.createUser(req, h)
        }
      },
      {
        method: 'GET',
        path: '/users',
        config: { auth: false },
        handler: async (req, h) => {
          return await UserController.getAllUsers(req, h)
        }
      }
    ])
  }
}
module.exports = User
