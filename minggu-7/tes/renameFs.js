const fs =  require('fs')

console.log('start reading a file...')

fs.readFile('text.txt', 'utf-8', (err,content)=>{
    if (err) {
        console.log('error happened during reading the file')
        return console.log(err)
    }
    fs.rename('text.txt', 'terserah.txt')

console.log('end of the file', (err)=>{
    if(err) console.log("Gagal Rename" +err);

    console.log("Berhasil")
})
})

console.log('end of the file')