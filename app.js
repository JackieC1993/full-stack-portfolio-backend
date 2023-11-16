const cors = require('cors');
const express = require('express')
const morgan = require('morgan');
const dimSumControllers = require('./controllers/dimSumController')

//Configuration
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Chinese Dim Sum Spot!');
});


app.use('/DimSums', dimSumControllers);
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

module.exports = app;