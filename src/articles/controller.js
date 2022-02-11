const httpStatus = require('../utils/httpStatus');

const controller = {}

const list = async (req, res, next) => {
    try {
        const articles = await service.list();
        return res.status(httpStatus.OK).json({articles});
    } catch (error) {
        next(error)
    }
}

controller.list = list;

module.exports = controller;