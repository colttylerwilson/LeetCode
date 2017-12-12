function foo() {
    var count = 0;
    for(var i = 1; i <= 3; i++) {
        for(var j = i+1 ; j <= 4; j++) {
            count = count + (i*j);
        }
    }
    console.log(count);
}

foo();