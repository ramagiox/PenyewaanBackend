let mong = require('mongoose');

let barang = mong.Schema({
	KdBarang: String,
	NamaBarang : String,
	KdKategori: String,
	HargaSewa: Number,
	StatusBarang: String,
    JumlahBarang: Number,
    HargaDenda : Number,
	Foto : String
});

let Barang = module.exports = mong.model("Barang", barang, "Barang");
