/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var up = (moves.match(/U/g)||[]).length;
    var down = (moves.match(/D/g)||[]).length;
    var left = (moves.match(/L/g)||[]).length;
    var right = (moves.match(/R/g)||[]).length;

    if(up - down == 0 && left - right == 0)
        {
            return true;
        }
        else
            return false;
};
