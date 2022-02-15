const database = require("../database/service");

const service = {};;

const list = async (options) => {
    let limit = options.limit || 10;
    let page = options.page || 1;

    const skip = limit*(page - 1);

    const result = await database.find(limit, skip);
    return result;
}

const create = async (article) => {
    const result = await database.insertOne(article);
    return result;
};

const findArticleById = async ({id}) => {
    const article = await database.findOneById(id); 
    if(article) return article;
}

const existArticleById = async (id) => {
    return Boolean(await findArticleById(id));
} 

service.list = list;
service.create = create;
service.existArticleById = existArticleById;
service.findArticleById = findArticleById;

module.exports = service;