let mong = require('mongoose');

let penyewa = mong.Schema({
	UserNamePenyewa : String,
	PasswordPenyewa : String,
	NamaPenyewa: String,
	EmailPenyewa: String,
	AlamatPenyewa: String,
	NoTelp: String,
});

let Penyewa = module.exports = mong.model("Penyewa", penyewa, "Penyewa");
