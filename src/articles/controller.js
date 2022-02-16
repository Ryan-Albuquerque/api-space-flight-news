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

const update = async (req, res, next) => {
    try {
        const article = req.body;
        const {id} = req.params;

        const result = await service.update(id, article);

        if (result) {
            return res.status(httpStatus.OK).json({result});
        } else {
            return res.status(httpStatus.NOT_FOUND).json({message: 'article not found'})
        }
    } catch (error) {
        next(error)
    }
};

const get = async (req, res, next) => {
    try {
        let {id} = req.params;
        id = parseInt(id, 10);
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

const remove = async (req, res, next) => {
    try {
        let {id} = req.params;
        id = parseInt(id, 10);
        const result = await service.removeArticleById(id);
        if (result) {
            return res.status(httpStatus.OK).json({article: 'Deleted!'});
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
controller.update = update;
controller.remove = remove;

module.exports = controller;