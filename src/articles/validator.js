const tv4 = require('tv4');
const httpStatus = require('../utils/httpStatus');
const articleSchema = require('./schemas/article.json');
const service = require('./service');

const validator = {};

const createArticle = async (req, res, next) => {
    const article = req.body;

    tv4.addSchema(articleSchema);

    const validation = tv4.validateResult(article, "article");

    if(!validation.valid){
        return res.status(httpStatus.BAD_REQUEST).json({message: validation.error.message})
    }

    const articleExists = await service.existArticleById(article.id);

    if(articleExists){
        return res.status(httpStatus.BAD_REQUEST).json({message: 'Article is already added'}); 
    }

    next();

}

validator.createArticle = createArticle;


module.exports = validator;