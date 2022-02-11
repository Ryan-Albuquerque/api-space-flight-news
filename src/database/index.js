const { MongoClient } = require("mongodb");

const uri ="mongodb://localhost:27017/db";
let client = {};
let db = {};
let collections = {};

const database = {};

const connect = async() => {
    try {
        client = await new MongoClient(uri).connect();
        db = await client.db();
        console.log('Connect successfully!');
    } catch (error) {
        throw error
    }
}

const close = async () => {
    try {
        if (client) {
            await client.close();
            client = {};
        }
        console.log('Database closed');
    } catch (error) {
        throw error
    }
}

const getCollection = async (name) =>{
    let collection = collections[name];
    if (!collection) {
        collection = db.collection(name);
        collections[name] = collection;
    }
    return collection;
}

database.connect = connect;
database.close = close;
database.getCollection = getCollection;

module.exports = database;