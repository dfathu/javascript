function panggilnestedarray(data){
    data.forEach(function (item, index, array) {
        item.forEach(function (item, index, array) {
            if(index===0){console.log('id : '+item);}
            if (index === 1) {console.log('name : ' + item);}
            if (index === 2) {console.log('Company : ' + item);}
        })
        console.log('');
        console.log('');
    })
    for (let i = 0; i < data.length; i++) {
        console.log('id : '+data[i][0]);
        console.log('name : ' + data[i][1]);
        console.log('Company : ' + data[i][2]);
        console.log('\n');
    }
}
var nestedArray = [
    [1,"Mark Zuckenberg","Facebook"],
    [2, "Elon Musk", "Tesla"],
    [3, "Bill Gates", "Microsoft"],
    [4, "Steve Jobs", "Apple"],
]
panggilnestedarray(nestedArray)
