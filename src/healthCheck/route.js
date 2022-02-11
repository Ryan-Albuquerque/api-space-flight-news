const httpStatus = require('../utils/httpStatus');

const routes = require('express').Router();

routes.get('/', (req, res)=> res.status(httpStatus.OK).json({message: 'Back-end Challenge 2021 🏅 - Space Flight News'}));

module.exports = routes;