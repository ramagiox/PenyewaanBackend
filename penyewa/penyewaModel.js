let mong = require('mongoose');

let penyewa = mong.Schema({
	KdPenyewa: String,
	UserName : String,
	NamaPenyewa: String,
	EmailPenyewa: String,
	AlamatPenyewa: String,
	NoTelp: String,
	UserName : String
});

let Penyewa = module.exports = mong.model("Penyewa", penyewa, "Penyewa");
