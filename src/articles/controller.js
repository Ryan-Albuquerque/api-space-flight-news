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

controller.list = list;

module.exports = controller;