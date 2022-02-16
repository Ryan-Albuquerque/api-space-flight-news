const tv4 = require('tv4');
const httpStatus = require('../utils/httpStatus');
const articleSchema = require('./schemas/article.json');
const updateArticleSchema = require('./schemas/updateArticleSchema.json');
const service = require('./service');

const validator = {};

const getArticle = async (req, res, next) => {
    const articleId = req.params?.id || req.body?.id;

    const articleExists = await service.existArticleById(articleId);

    if(articleExists){
        return res.status(httpStatus.BAD_REQUEST).json({message: 'Article is already added'}); 
    }

    next();
}

const validId = async (req, res, next) => {
    let {id} = req.params;

    if(!id || isNaN(id)){
        return res.status(httpStatus.BAD_REQUEST).json({message: 'Article Id is not valid'});
    }
    next();
}

const createArticle = async (req, res, next) => {
    const article = req.body;

    tv4.addSchema(articleSchema);

    const validation = tv4.validateResult(article, "article");

    if(!validation.valid){
        return res.status(httpStatus.BAD_REQUEST).json({message: validation.error.message})
    }

    next();

}

const updateArticle = async (req, res, next) => {
    const article = req.body;

    tv4.addSchema(updateArticleSchema);

    const validation = tv4.validateResult(article, "updateArticle");

    if(!validation.valid){
        return res.status(httpStatus.BAD_REQUEST).json({message: validation.error.message})
    }

    next();
}


validator.createArticle = createArticle;
validator.getArticle = getArticle;
validator.validId = validId;
validator.updateArticle = updateArticle;

module.exports = validator;