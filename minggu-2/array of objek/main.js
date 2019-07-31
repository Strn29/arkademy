const siswa = [
    {
        "nama":"Achmad Zulfikar",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"Akmal Widad",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"Ananda Zidane",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"Rendi Fadillah",
        "kelas":"XI-RPL-1"
    },
    {
        "nama":"Rizal Nurul Huda",
        "kelas":"XI-RPL-1"
    },
];

let x;

for(x in siswa){
    let namaSiswa = siswa[x].nama
    let kelasSiswa = siswa[x].kelas
    let divider = "<div>\
    <span class='nama-siswa'>"+namaSiswa+"</span>\
    <span class='kelas-siswa'>"+kelasSiswa+"</span>\
    </div>";
    document.getElementById('siswa-rp').innerHTML += divider
}