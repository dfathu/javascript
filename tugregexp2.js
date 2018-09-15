function panggilRegexp(value) {
    let data = "abcdefgh";
    var res;
    for (let index = 0; index < data.length; index++) {
        var patt = new RegExp(data[index]);
        res = patt.test(value[8]);
        if(res===true)
        {
            console.log(value);
            break;
        }
    }
    if(res===false)
    console.log("Belajar");
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");

panggilRegexp("Belajar php");