DataSewa = require('./datasewaModel.js');

module.exports.getDataSewa = function(callback,limit){
    DataSewa.find(callback).limit(limit);
}

module.exports.getDataSewaFull = function(callback){
    DataSewa.aggregate([
    
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
module.exports.getDataSewaByUserName = function(username,callback,limit){
    DataSewa.find({UserNamePenyewa : username, StatusDataSewa : "aktif" },callback).limit(limit);
}

module.exports.getDataSewaByUserName1 = function(username,callback,limit){
    DataSewa.find({UserNamePenyewa : username},callback).limit(limit);
}

module.exports.getDataSewaByUserName2 = function(username,callback,limit){
    DataSewa.find({UserNamePenyewa : username, StatusDataSewa : "booked" },callback).limit(limit);
}
module.exports.getDataSewaByUserName3 = function(username,callback,limit){
    DataSewa.find({UserNamePenyewa : username, StatusDataSewa : "late" },callback).limit(limit);
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
