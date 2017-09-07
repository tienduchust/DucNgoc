//#region sampleRegion

//#endregion

//#region Add extension module
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
//#endregion

//#region Initialize server
const app = express();
const port = 6789;

const users = require('./routes/users');
app.use(cors());

app.use(bodyParser.json());

app.use('/users',users);

app.listen(port,()=>{
    console.log('Server started on port '+port);
});
//#endregion 

//#region Api
app.get('/',(req,res)=>{
    res.send('Invalid Endpoint');
})
//#endregion
