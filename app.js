const express = require('express')
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const dimSumControllers = require('./controllers/dimSumController')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Chinese Dim Sum Spot!');
});

app.use('/allDimSums', dimSumControllers);
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

module.exports = app;