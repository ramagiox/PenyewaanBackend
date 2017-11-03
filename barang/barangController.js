Barang = require('./barangModel.js');

module.exports.getBarang = function(callback){
    Barang.aggregate([{
        "$lookup":{
         from:"Kategori",
         localField:"KdKategori",
         foreignField:"KdKategori",
         as:"KategoriInfo"
     }}, 
         {"$unwind":"$KategoriInfo"
     }
     ],callback)
}

module.exports.getBarangByKdBarang = function(kdbarang,callback){
    Barang.find({KdBarang:kdbarang},callback);
}

module.exports.getBarangBySearch = function(nama,callback){
    Barang.find({NamaBarang:/.*nama.*/},callback);
}

module.exports.getBarangById = function(id,callback,limit){
    Barang.findById(id,callback).limit(limit);
}

module.exports.createBarang = function(barang,callback){
    Barang.create(barang,callback);
}

module.exports.deleteBarang = function(id,callback){
    Barang.findByIdAndRemove(id,callback);
}

module.exports.updateBarang = function(id,barang,callback){
    Barang.findByIdAndUpdate(id,barang,callback);
}
