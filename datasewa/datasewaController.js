DataSewa = require('./datasewaModel.js');

module.exports.getDataSewa = function(callback,limit){
    DataSewa.find(callback).limit(limit);
}

module.exports.getDataSewaFull = function(callback){
    DataSewa.aggregate([
    {"$lookup":{
         from:"Pegawai",
         localField:"UserNamePegawai",
         foreignField:"UserNamePegawai",
         as:"PegawaiInfo"
     }},
        {"$unwind":"$PegawaiInfo"},
     {"$lookup":{
         from:"Penyewa",
         localField:"UserNamePenyewa",
         foreignField:"UserNamePenyewa",
         as:"PenyewaInfo"
     }}, 
        {"$unwind":"$PenyewaInfo"}
     ],callback)
}

module.exports.getDataSewaById = function(id,callback,limit){
    DataSewa.findById(id,callback).limit(limit);
}
module.exports.getDataSewaByKdPenyewa = function(id,callback,limit){
    DataSewa.find({KdPenyewa : id, StatusDataSewa : "aktif" },callback).limit(limit);
}
module.exports.getDataSewaByKdPenyewa2 = function(id,callback,limit){
    DataSewa.find({KdPenyewa : id, StatusDataSewa : "booked" },callback).limit(limit);
}
module.exports.getDataSewaByKdPenyewa3 = function(id,callback,limit){
    DataSewa.find({KdPenyewa : id, StatusDataSewa : "late" },callback).limit(limit);
}

module.exports.createDataSewa = function(datasewa,callback){
    DataSewa.create(datasewa,callback);
}

module.exports.deleteDataSewa = function(id,callback){
    DataSewa.findByIdAndRemove(id,callback);
}

module.exports.updateDataSewa = function(id,datasewa,callback){
    DataSewa.findByIdAndUpdate(id,datasewa,callback);
}
