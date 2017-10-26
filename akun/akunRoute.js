let ex = require('express');
let route = ex.Router();
let akunController = require('./akunController.js');
let User = require('./akunModel');

route.post('/login/authenticate', function(req, res){
    let data = {
        UserName: req.body.UserName,
        Password: req.body.Password
    };
    User.findOne(data).lean().exec(function(err, user){
        if(err){
            return res.json({error: true});
        }
        if(!user){
            return res.status(404).json({'message':'User not found!'});
        }
        console.log(user);
        
        // let token = jwt.sign(user, global.config.jwt_secret, {
        //     expiresIn: 1440 // expires in 1 hour
        // });
        // //console.log(token);
        
        res.json(user.UserName);
    });
});

route.get('/akun', function (req, res) {
    akunController.getAkun(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/akun/:_id', function (req, res) {
    let id = req.params._id;
    akunController.getAkunById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/akun', function (req, res) {
    let akun = req.body;
    akunController.createAkun(akun, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/akun/:_id', function (req, res) {

    akunController.deleteAkun(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/akun/:_id', function (req, res) {
    let akun = req.body;
    akunController.updateAkun(req.params._id,akun, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;