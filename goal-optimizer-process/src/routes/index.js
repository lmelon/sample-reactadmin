// Import our Controllers
const cfController = require('../controllers/cfController')

const routes = [
  {
    method: 'GET',
    url: '/api/computeBalanceForFile/:id',
    handler: cfController.computeBalanceForFile
  },
]

module.exports = routes