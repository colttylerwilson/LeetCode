var hammingdistance = function (x, y) {
    var xB = x.toString(2);
    var yB = y.toString(2);
    var countX = 0;
    var countY = 0;
    while (x > 0) {
        x = Math.floor(x / 2);
        countX = countX + 1;
    }
    while (y > 0) {
        y = Math.floor(y / 2);
        countY = countY + 1;
    }
    if (countX > countY) {
        for (var i = 0; i < Math.abs(countY - countX); i++) {
            yB = "0" + yB;
        }
    }
    else
    {
        for (var i = 0; i < Math.abs(countY - countX); i++) {
            xB = "0" + xB;
        }
    }

    var HD = 0;
    for(var i = 0; i < yB.length; i++)
    {
        if(yB.charAt(i) != (xB.charAt(i)))
        {
            HD = HD + 1;
        }
    }
    return HD;
};

console.log(hammingdistance(4, 2))  ;