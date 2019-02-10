// Import our Controllers
const cfController = require('../controllers/cfController')

const routes = [
  {
    method: 'POST',
    url: '/api/computeCashFlow',
    handler: cfController.computeCashFlow
  },
]

module.exports = routes