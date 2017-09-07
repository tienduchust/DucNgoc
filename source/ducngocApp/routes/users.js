//#region sampleRegion

//#endregion

//#region Add extension module
const express = require('express');
const router = express.Router();
//#endregion

//#region Register
router.get('/register', (req,res ,next) =>{
    res.send('REGISTER');
});
//#endregion

module.exports = router;