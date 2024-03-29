const db = require('./index');
const services = {};

let dbo;
const collectionName = 'articles';

const find = async (limit, skip) => {
    dbo = await db.getCollection(collectionName)
    try {
        const list = await dbo.find()
                              .skip(skip)
                              .limit(limit)
                              .toArray();
        return list
    } catch (error) {
        throw error
    }
}

const removeById = async (id) => {
    dbo = await db.getCollection(collectionName);
    try {   
        return await dbo.findOneAndDelete({id});
    } catch (error) {
        throw error
    }
}

const findAndUpdate = async (id, article) => {
    dbo = await db.getCollection(collectionName);
    try {
        id = parseInt(id, 10)
        const {value} = await dbo.findOneAndUpdate({id}, {$set: article}, {returnDocument: 'after'});
        return value
    } catch (error) {
        throw error
    }
};

const findOneById = async (id) => {
    dbo = await db.getCollection(collectionName)
    try { 
        return await dbo.findOne({id: id})
    } catch (error) {
        throw error
    }

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
services.findAndUpdate = findAndUpdate;
services.removeById = removeById;

module.exports = services;