let ex = require('express');
let route = ex.Router();
let penyewaController = require('./penyewaController.js')
let User = require('./penyewaModel.js');
let jwt = require('jsonwebtoken');
let verifyToken = require('../middleware/verifyToken');
global.config = require('../config/configJwt');

route.post('/login/authenticate', function(req, res){
    let data = {
        UserNamePenyewa: req.body.UserNamePenyewa,
        PasswordPenyewa: req.body.PasswordPenyewa
    };
    User.findOne(data).lean().exec(function(err, user){
        if(err){
            return res.json({error: true});
        }
        if(!user){
            return res.status(404).json({'message':'User not found!'});
        }
        console.log(user);
        
         let token = jwt.sign(user, global.config.jwt_secret, {
             //expiresIn: 1440 // expires in 1 hour
         });
        console.log(token);
        
        res.json(user.UserNamePenyewa);
    });
});

route.get('/penyewa', function (req, res) {
    penyewaController.getPenyewa(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});




route.get('/penyewa/:_id', function (req, res) {
    let id = req.params._id;
    penyewaController.getPenyewaById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/penyewa/search/:username', function (req, res) {
    let user = req.params.username;
    penyewaController.getPenyewaByUser(user,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});


route.post('/penyewa', function (req, res) {
    let penyewa = req.body;
    penyewaController.createPenyewa(penyewa, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/penyewa/:_id', function (req, res) {

    penyewaController.deletePenyewa(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/penyewa/:_id', function (req, res) {
    let penyewa = req.body;
    penyewaController.updatePenyewa(req.params._id,penyewa, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
