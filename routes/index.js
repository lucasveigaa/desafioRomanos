const express = require('express')
const routes = express.Router()
const romanController = require('../controllers/romanController')

routes.post('/search', romanController.converterRoman)


module.exports = routes
