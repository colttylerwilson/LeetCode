/**
 * @param {number} x
 * @param {number} y
 * @return {number} HD
 */
var hammingdistance = function (x, y) {
    this.x = x;
    this.y = y;
    var xB = this.x.toString(2);
    var yB = this.y.toString(2);

    var countX = 0;
    var countY = 0;

    if (x == 0) {
        countX = 1;
    }
    else {
        while (x > 0) {
            x = Math.floor(x / 2);
            countX = ++countX;
        }
    }
    if (y == 0) {
        countY = 1;
    }
    else {
        while (y > 0) {
            y = Math.floor(y / 2);
            countY = ++countY;
        }
    }
    
    if (countX > countY) {
        for (var i = 0; i < Math.abs(countY - countX); i++) {
            yB = "0" + yB;
        }
    }
    else {
        for (var i = 0; i < Math.abs(countY - countX); i++) {
            xB = "0" + xB;
        }
    }

    var HD = 0;
    for (var i = 0; i < yB.length; i++) {
        if (yB.charAt(i) != (xB.charAt(i))) {
            HD = HD + 1;
        }
    }
    return HD;
};

console.log(hammingdistance(2147483647, 0));