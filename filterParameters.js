function panggilFilterParameters1(value){
    var arr = [
        { negara: 'Indonesia', benua: 'Asia' },
        { negara: 'Jerman', benua: 'Eropa' },
        { negara: 'Spayol', benua: 'Eropa' },
        { negara: 'Korea Selatan', benua: 'Asia' },
        { negara: 'Portugal', benua: 'Eropa' },
        { negara: 'Amerika Serikat', benua: 'Amerika' }
    ];
    var benua = arr.filter(function(element){
        return element.benua === value;
    });
    console.log('Tugas Pertama Filter dan Parameter');
    console.log(benua);
}
function panggilFilterParameters2(value) {
    var arr = [
        { negara: 'Indonesia', benua: 'Asia' },
        { negara: 'Jerman', benua: 'Eropa' },
        { negara: 'Spayol', benua: 'Eropa' },
        { negara: 'Korea Selatan', benua: 'Asia' },
        { negara: 'Portugal', benua: 'Eropa' },
        { negara: 'Amerika Serikat', benua: 'Amerika' }
    ];
    var benua = arr.filter(function (element) {
        return element.benua === value;
    });
    console.log('Tugas Kedua Filter dan Parameter');
    console.log(benua);
}
panggilFilterParameters1('Asia');
panggilFilterParameters2('Eropa');