const routes = require('express').Router();
const controller = require('./controller');

routes.get('/articles/', controller.list);
routes.post('/articles/');
routes.get('/articles/:id');
routes.put('/articles/:id');
routes.delete('/articles/:id');

module.exports = routes;