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

const findOneById = async (id) => {
    dbo = await db.getCollection(collectionName)
    return await dbo.findOne({id})

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

const insertOne = async (obj) => {
    dbo = await db.getCollection(collectionName);
    try {
        const inserted = await dbo.insertOne(obj, { writeConcern: { w : "majority", wtimeout : 100 } });
        return inserted;
    } catch (error) {
        throw error
    }
}

services.find = find;
services.insertMany = insertMany;
services.insertOne = insertOne;
services.findOneById = findOneById;

module.exports = services;