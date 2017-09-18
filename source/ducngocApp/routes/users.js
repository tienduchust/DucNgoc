//#region sampleRegion

//#endregion

//#region Add extension module
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const config = require('../config/database');

//#endregion

//#region Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ succes: false, msg: 'Failed to register user' });
        } else {
            res.json({ succes: true, msg: 'User registered' });
        }
    });
});
//#endregion

//#region Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                console.log('Start get token');
                const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        })
    });
});
//#endregion

//#region Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});
//#endregion

module.exports = router;