// Import Swagger Options
const swagger = require('./doc/swagger')

// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// CORS
fastify.register(require('fastify-cors'), { options: {origin: false }})

// init routes
const routes = require('./routes')
routes.forEach((route, index) => {
    fastify.route(route)
})

const config = require('../config/config');

// Run the server!
const start = async () => {
    try {
        await fastify.listen(config.port, '0.0.0.0')
        fastify.swagger()
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()