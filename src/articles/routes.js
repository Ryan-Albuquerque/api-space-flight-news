const routes = require('express').Router();
const validator = require('./validator');
const controller = require('./controller');

routes.get('/articles/', controller.list);
routes.post('/articles/', validator.createArticle, controller.create );
routes.get('/articles/:id');
routes.put('/articles/:id');
routes.delete('/articles/:id');

module.exports = routes;