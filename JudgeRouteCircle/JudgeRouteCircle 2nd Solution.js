/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    var x = 0;
    var y = 0;

    for (var i = 0; i < moves.length; i++) {
        switch (moves.substring(i, i + 1)) {
            case "U":
                y = y + 1;
                break;
            case "D":
                y = y - 1;
                break;
            case "L":
                x = x - 1;
                break;
            case "R":
                x = x + 1;
                break;
        }
    }
    
    if (x == 0 & y == 0) {
        return true;
    }
    else {
        return false;
    }
};
