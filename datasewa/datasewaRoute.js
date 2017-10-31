let ex = require('express');
let route = ex.Router();
let datasewaController = require('./datasewaController.js')

route.get('/datasewafull', function (req, res) {
    datasewaController.getDataSewaFull(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/datasewa', function (req, res) {
    datasewaController.getDataSewa(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/datasewa/:_id', function (req, res) {
    datasewaController.getDataSewaById(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/datasewa/search/:_id', function (req, res) {
    datasewaController.getDataSewaByKdPenyewa(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/datasewa/search2/:_id', function (req, res) {
    datasewaController.getDataSewaByKdPenyewa2(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/datasewa/search3/:_id', function (req, res) {
    datasewaController.getDataSewaByKdPenyewa2(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/datasewa', function (req, res) {
    let datasewa = req.body;
    datasewaController.createDataSewa(datasewa, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/datasewa/:_id', function (req, res) {

    datasewaController.deleteDataSewa(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/datasewa/:_id', function (req, res) {
    let datasewa = req.body;
    datasewaController.updateDataSewa(req.params._id,datasewa, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
