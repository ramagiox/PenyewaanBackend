let ex = require('express');
let route = ex.Router();
let barangController = require('./barangController.js')

route.get('/search/:nama',function(req,res){
	let nama = req.params.nama;
    barangController.getBarangBySearch(nama,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.get('/kdbarang/:kdbarang',function(req,res){
	let kdbarang = req.params.kdbarang;
    barangController.getBarangByKdBarang(kdbarang,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

route.get('/barang', function (req, res) {
    barangController.getBarang(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/barang/:_id', function (req, res) {
    let id = req.params._id;
    barangController.getBarangById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/barang', function (req, res) {
    let barang = req.body;
    barangController.createBarang(barang, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/barang/:_id', function (req, res) {

    barangController.deleteBarang(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/barang/:_id', function (req, res) {
    let barang = req.body;
    barangController.updateBarang(req.params._id,barang, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;
