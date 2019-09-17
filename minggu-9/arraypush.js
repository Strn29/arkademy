const hewan = ['singa', 'badak', 'naga'], tambahan = ['beruang', 'ayam', {obj: 'kambing'}]
const arrayPushHewan = async () =>{
    await tambahan.map(res => hewan.push(res))
    return console.log(hewan);
}

arrayPushHewan();