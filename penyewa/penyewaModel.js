let mong = require('mongoose');

let penyewa = mong.Schema({
	UserNamePenyewa : String,
	PasswordPenyewa : String,
	NamaPenyewa: String,
	EmailPenyewa: String,
	AlamatPenyewa: String,
	NoTelp: String,
	TglLahir : Date,
	Umur : Number
});

let Penyewa = module.exports = mong.model("Penyewa", penyewa, "Penyewa");
