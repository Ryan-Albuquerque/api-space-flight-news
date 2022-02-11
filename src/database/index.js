const { MongoClient } = require("mongodb");

const uri =
  "mongodb://localhost:27017/db";

class database {
    constructor(){
        this.client = {};
        this.db = {};
    }

    async connect() {
        try {
            this.client = new MongoClient(uri);
            this.db = await this.client.connect();
            console.log('Connect successfully!');
        } catch (error) {
            throw error
        }
    }

    async close() {
        try {
            if (this.client) {
                await this.client.close();
                this.client = {};
            }
            console.log('Database closed');
        } catch (error) {
            throw error
        }
    }
}

module.exports = database;