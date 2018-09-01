function panggilPerulangan (){
    var dataKota = ['Jakarta','Balikpapan','Medan'];
    for(i = 0; i < dataKota.length; i++)
    {
        console.log(dataKota[i]);
        console.log(i);
        console.log(dataKota);
    }
    console.log('ini for');
}
function panggilForeach(){
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota.forEach(function(item,index,array){
        console.log(item);
        console.log(index);
        console.log(array);
    })
    console.log('ini foreach');
}
function panggilMap() {
    var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
    dataKota.map(function (item, index, array) {
        console.log(item);
        console.log(index);
        console.log(array);
    })
    console.log('ini map');
}

panggilPerulangan();
panggilForeach();
panggilMap();

// perbedaan for , foreach dan map
// 1. for dapat melakukan perulangan berdasarkan panjang dari sebuah array;
// 2. for dapat digunakan untuk melakukan perulangan berdasarkan jumlah yang sudah ditentukan
// 3. for TIDAK DAPAT menghasilkan array baru dengan cara : var dataBaru = for(var i = 0;i<dataKota.length; i++){return dataKota[i]};
// contoh yang bisa: var dataBaru = [];for (var i = 0; i < dataKota.length; i++) { dataBaru.push('Kota: ' + dataKota[i]) };
// 1. foreach dapat digunakan untuk melakukan perulangan berdasarkan panjang dari sebuah array contoh :
//     var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
//     dataKota.forEach(function (item, index, array) {
//         console.log(item);
//         console.log(index);
//         console.log(array);
//     })
// 2. foreach TIDAK DAPAT melakukan perulangan berdasarkan jumlah yang sudah ditentukan seperti yang dilakukan for
// 3. foreach TUDAK DAPAT menghasilkan aray baru dengan seperti ini :
//     var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
//     var dataBaru = dataKota.forEach(function (item, index, array) {
//         return 'Kota : ' + item;
//     })
//     console.log(dataBaru);
//     yang benar :
//     var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
//     var dataBaru = [];
//     dataKota.forEach(function (item, index, array) {
//         return dataBaru.push('Kota : ' + item);
//     })
//     console.log(dataBaru);
// 1. map dapat digunakan untuk melakukan perulangan berdasarkan panjang dari sebuah array contoh:
//     var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
//     dataKota.map(function (item, index, array) {
//         console.log(item);
//         console.log(index);
//         console.log(array);
//     })
// 2. map TIDAK DAPAT melakukan perulangan berdasarkan jumlah yang sudah ditentukan seperti yang dilakukan for
// 3. map DAPAT menghasilkan aray baru dengan seperti ini:
// var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
// var dataBaru = dataKota.map(function (item, index, array) {
//     return 'Kota : ' + item;
// })
// console.log(dataBaru);

// #NB : jika kita ingin melakukan perulangan berdasarkan jumlah data yang sudah ditentukan maka gunakanlah perintah FOR, jika kita igin melakukan perulangan berdasarkan panjang array dan tidak igin mencetak array baru lagi maka gunakan forEach,jika kita ingin melakukan perulangan dan igin menghasilkan aray baru maka gunakan MAP