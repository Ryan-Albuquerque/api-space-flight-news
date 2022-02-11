const db = require('./index');
const services = {};

let dbo;
const collectionName = 'articles';

const find = async (limit, skip) => {
    dbo = await db.getCollection(collectionName)
    const list = await dbo.find()
                            .skip(skip)
                            .limit(limit)
                            .toArray();
    return list
}

services.find = find;

module.exports = services;