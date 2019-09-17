const fs = require('fs');

fs.readFile('terserah.txt', async (err, data) => {
    if(err) console.log("Data Tidak ditemukan!");
    
    await console.log("Data ditemukan"); 

    fs.unlink('terserah.txt', (err) => {

    if(err) return console.log("Gagal hapus data");

   console.log("Hapus data berhasil")

    })
})