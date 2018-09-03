function deretAngka(n){
    for (let index = 0; index <= n; index++) {
        var kel3 = index%3;
        var kel5 = index%5;

        if(kel3===0&&kel5!==0){
            console.log('nio')
        }
        else if(kel3 !== 0 && kel5 === 0) {
            console.log('mic')
        }
        else if (kel3 === 0 && kel5 === 0) {
            console.log('niomic')
        }
        else{
            console.log(index);
        }
        
    }
}
deretAngka(30)