function panggilnestedarray(data) {
    var gelas=[[],[],[],[]];
    data.forEach(function (item, index, array) {
        var i=index;
        var h=index;
        item.forEach(function (item, index, array) {            
            if (index === 0) { gelas[i][index] = data[index][i]; }
            if (index === 1) { gelas[i][index] = data[index][i]; }
            if (index === 2) { gelas[i][index] = data[index][i]; }
            h=h+1;
            if (h===4){
                for (var j = 0; j < 3; j++) {
                    if (j === 0) { gelas[i + 1][j] = data[j][i + 1]; }
                    if (j === 1) { gelas[i + 1][j] = data[j][i + 1]; }
                    if (j === 2) { gelas[i + 1][j] = data[j][i + 1]; }
                }
            }
        })
        console.log('');
        console.log('');
    })
    // for (var i=0; i < data[0].length; i++) {
    //     for (var j=0; j < 3; j++) {
    //         if (j === 0) { gelas[i][j] = data[j][i]; }
    //         else if (j === 1) { gelas[i][j] = data[j][i]; }
    //         else if (j === 2) { gelas[i][j] = data[j][i]; } 
    //     }
    // }
    console.log(gelas);
}
var nestedArray = [
    [1,2,3,4],
    ["Mark Zuckenberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
    ["Facebook", "Tesla", "Microsoft", "Apple"]
]
panggilnestedarray(nestedArray)
