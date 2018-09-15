function panggilRegexp(value){
    let str = "abcdefghijklmnopqrstuvwxyz-A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z";
    var ambil = RegExp(value,"gi");
    console.log(str.match(ambil));

}

panggilRegexp("c")
panggilRegexp("k")
panggilRegexp("l")