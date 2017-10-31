let mong = require('mongoose');

let datasewa = mong.Schema({
	KdDataSewa : String,
	UserNamePegawai : String,
	UserNamePenyewa : String,
	KdBarang : String,
	StatusDataSewa : String,
	TglMulai : Date,
	TglSelesai : Date,
	JumlahBarang : Number
});

let DataSewa = module.exports = mong.model("DataSewa", datasewa, "DataSewa");
