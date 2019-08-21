let todo = [
{
    title:"Rendang",
    description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali.",
},
{
    title:"Kepiting Saus Tiram",
    description:"Kepiting saus tiram adalah sebuah hidangan makanan laut dari Tiongkok yang terdiri dari kepiting yang disajikan dengan siraman saus tiram. Masakan ini adalah masakan populer di Asia, yang dapat ditemukan di Tiongkok, Singapura, Indonesia dan Filipina.",
},
{
    title:"Ayam Bakar",
    description:"Ayam bakar adalah sebuah hidangan Asia Tenggara Maritim, terutama hidangan Indonesia atau Malaysia, dari ayam yang dipanggang di atas arang",
},
{
    title:"Kerak Telor",
    description:"Kerak telur adalah makanan asli daerah Jakarta, dengan bahan-bahan beras ketan putih, telur ayam, ebi yang disangrai kering ditambah bawang merah goreng, lalu diberi bumbu yang dihaluskan berupa kelapa sangrai, cabai merah, kencur, jahe, merica butiran, garam dan gula pasir.",
},
{
    title:"Gado - gado",
    description:"Gado-gado adalah salah satu makanan yang berasal dari Indonesia yang berupa sayur-sayuran yang direbus dan dicampur jadi satu, dengan bumbu kacang atau saus dari kacang tanah dan yang dihaluskan disertai irisan telur dan pada umumnya banyak yang menambahkan kentang rebus yang sudah dihaluskan untuk saus gado gado kentang rebus dimasak bersamaan dengan bumbu kacang kemudian di atasnya ditaburi bawang goreng. Sedikit emping goreng atau kerupuk (ada juga yang memakai kerupuk udang) juga ditambahkan.",
},
]

class TodoList{
    item = document.getElementById('todo-list')
    content = document.getElementById('todo-description')

    listItem = ()=>{
       for(let x in todo){
       this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>'
       }
    }
    seDisplay = (n=0)=>{
      this.content.innerHTML = '<div class="title">'+todo[n].title+'</div>\
      <div class="container">'+todo[n].description+'</div>'
    }
}

const todoList = new TodoList()