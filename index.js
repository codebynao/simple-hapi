const Hapi = require('hapi')
const mongoose = require('mongoose')

// Init server
const init = async () => {
  const server = Hapi.Server({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
  })

  // Init DB connection
  require('./lib/dbConnection')(mongoose, server)

  // Import routes
  server.route({
    path: '/',
    method: 'GET',
    handler: function(request, h) {
      return 'Hello hapi'
    }
  })

  // ROUTING PLUGIN
  await server.register([require('./routes/user')])

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

init()
