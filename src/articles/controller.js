const httpStatus = require('../utils/httpStatus');
const service = require('./service');

const controller = {}

const list = async (req, res, next) => {
    try {
        const options = req.query;
        const articles = await service.list(options);
        return res.status(httpStatus.OK).json({articles});
    } catch (error) {
        next(error)
    }
}

const get = async (req, res, next) => {
    try {
        const id = req.params;
        const article = await service.findArticleById(id);
        if (article) {
            return res.status(httpStatus.OK).json({article});
        } else {
            return res.status(httpStatus.NOT_FOUND).json({message: 'article not found'})
        }
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const article = req.body;
        await service.create(article);
        return res.status(httpStatus.CREATED).json("Created");
    } catch (error) {
        next(error)
    }
}

controller.list = list;
controller.create = create;
controller.get = get;

module.exports = controller;