const axios = require('axios');
const services = require('./service');
const db = require('./index');

const populate = async () => {
    await db.connect();

    const res = await axios.get('https://api.spaceflightnewsapi.net/v3/articles?_limit=100');
    
    const result = await services.insertMany(res.data);
    
    console.log('Inserted!');
}

populate();