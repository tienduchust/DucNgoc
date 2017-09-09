//#region sampleRegion

//#endregion

//#region Add extension module
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//#endregion

//#region Connect Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
    console.log('Database error '+err);
});

//#endregion

//#region Initialize server
const app = express();
const port = 6789;

const users = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(bodyParser.json());

app.use('/users', users);

app.listen(port, () => {
    console.log('Server started on port ' + port);
});
//#endregion 

//#region Api
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});
//#endregion
