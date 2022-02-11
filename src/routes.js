const routes = require('express').Router();
const articles = require('./articles/routes');
const handleError = require('./middlewares/handleError');
const healthCheck = require('./healthCheck/route');

routes.use(healthCheck);
routes.use(articles);
routes.use(handleError);

module.exports = routes;