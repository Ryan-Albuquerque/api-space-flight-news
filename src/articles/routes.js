const routes = require('express').Router();
const validator = require('./validator');
const controller = require('./controller');

routes.get('/articles/', controller.list);
routes.post('/articles/',  validator.getArticle, validator.createArticle, controller.create );
routes.get('/articles/:id', validator.validId, controller.get);
routes.put('/articles/:id');
routes.delete('/articles/:id');

module.exports = routes;