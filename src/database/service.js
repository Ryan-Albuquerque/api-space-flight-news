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

const insertMany = async (bulk) => {
    dbo = await db.getCollection(collectionName);
    try {
        const batch = await dbo.insertMany(bulk);
        return batch;
    } catch (error) {
        throw error
    }
}

services.find = find;
services.insertMany = insertMany;

module.exports = services;