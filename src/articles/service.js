const database = require("../database/service");

const service = {};;

const list = async (options) => {
    let limit = options.limit || 10;
    let page = options.page || 1;

    const skip = limit*(page - 1);

    const result = await database.find(limit, skip);
    return result;
}

service.list = list;

module.exports = service;