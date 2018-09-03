function filterbilgenap(bilangan){
    console.log("===========================================");
    for(i=0; i<bilangan.length; i++){
        if (bilangan[i] % 2 === 0 ){
            console.log(bilangan[i]);
        } 
    }
}
function panggilfilter() {
    var ar = [
        { negara: 'Indonesia', benua: 'Asia' },
        { negara: 'Jerman', benua: 'Eropa' },
        { negara: 'Spayol', benua: 'Eropa' },
        { negara: 'Korea Selatan', benua: 'Asia' },
        { negara: 'Portugal', benua: 'Eropa' },
        { negara: 'Amerika Serikat', benua: 'Amerika' },
    ]
    var benuaEropa = ar.filter(function (item) {
        return item.benua === 'Eropa';
    });
    return benuaEropa;
}
var arr = [1,2,3,4,5,6];
var bilgan = [];
var filgan = arr.filter(function(element){
    return element % 2 !== 0; 
})
var filgen = arr.filter(function (element) {
    return element % 2 !== 0;
})

for (index = 0; index < arr.length; index++) {
    if (arr[index] % 2 !== 0) {
        bilgan.push(arr[index]);
    }
}

console.log(bilgan);
console.log(filgan);
console.log(filgen);
console.log('=====================================================');
console.log('Latihan menggunakan .filter()');
panggilfilter();
filterbilgenap(arr);