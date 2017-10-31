Denda = require('./dendaModel.js');

module.exports.getDenda = function(callback,limit){
    Denda.find(callback).limit(limit);
}

module.exports.getDendaById = function(id,callback,limit){
    Denda.findById(id,callback).limit(limit);
}

module.exports.getDendaByKdDataSewa = function(id,callback,limit){
    Denda.find(id,callback).limit(limit);
}

module.exports.createDenda = function(denda,callback){
    Denda.create(denda,callback);
}

module.exports.deleteDenda = function(id,callback){
    Denda.findByIdAndRemove(id,callback);
}

module.exports.updateDenda = function(id,denda,callback){
    Denda.findByIdAndUpdate(id,denda,callback);
}
