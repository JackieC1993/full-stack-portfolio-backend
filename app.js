const express = require('express')
const app = express();
const cors = require('cors');
const dimSumsControllers = require('./controllers/dimSumController')

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Chinese Dim Sum Spot!');
});

app.use('/allDimSums', dimSumsControllers);
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

module.exports = app;