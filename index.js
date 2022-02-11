const express = require('express')
const cors = require('cors');

const database = require('./src/database');
const routes = require('./src/routes');

const app = express()
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(port, async () => {
    await database.prototype.connect();
    console.log(`App listening on port ${port}!`)
});