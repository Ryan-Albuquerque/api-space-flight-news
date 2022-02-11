const httpStatus = require("../utils/httpStatus");

const errorHandler = (err, req, res, next) => {
    if (req.headersSent) {
        res.status(httpStatus.INTERNAL_ERROR).send({ error: 'Contate o adm!' });
    } else {
        next(err);
    }
}

module.exports = errorHandler;
