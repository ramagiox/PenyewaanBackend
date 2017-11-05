let ex = require('express');
let route = ex.Router();
let pegawaiController = require('./pegawaiController.js')
let jwt = require('jsonwebtoken');
let verifyToken = require('../middleware/verifyToken');
let User = require('./pegawaiModel');
global.config = require('../config/configJwt');

route.post('/login/pegawai/authenticate', function(req, res){
    let data = {
        UserNamePegawai: req.body.UserNamePegawai,
        PasswordPegawai: req.body.PasswordPegawai
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
             expiresIn: 99999 // expires in 1 hour
         });
        console.log(token);
        
        res.json(token);
    });
});

route.get('/pegawai', function (req, res) {
    pegawaiController.getPegawai(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/username/:username',function(req,res){
	let username = req.params.username;
    pegawaiController.getPegawaiByUserNamePegawai(username,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.get('/pegawai/:_id', function (req, res) {
    let id = req.params._id;
    pegawaiController.getPegawaiById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/pegawai', function (req, res) {
    let pegawai = req.body;
    pegawaiController.createPegawai(pegawai, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/pegawai/:_id', function (req, res) {

    pegawaiController.deletePegawai(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/pegawai/:_id', function (req, res) {
    let pegawai = req.body;
    pegawaiController.updatePegawai(req.params._id,pegawai, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
