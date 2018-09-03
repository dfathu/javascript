function balik(value){
    var kata = [];
    var a="";
    var b="";
    var j=0;
    for (i = value.length; i >= 0; i--){
        kata.push(value.slice(i-1,i));
        b = kata[j];
        a = a.concat('', b);
        j++;
    }
    console.log(a);
}
function balikkata(value) {
    return value.split('').reverse().join('');
}
balik('Niomic!');
balik('JavaScripts');
balik('alohahola');
balik('Jawa_Barat');