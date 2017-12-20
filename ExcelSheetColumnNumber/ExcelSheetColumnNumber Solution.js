/**
 * @param   {string} s
 * @return {number}
 */

var titleToNumber = function (s) {
    var number = 0;
    for(let i = 0; i < s.length; i++) {
        number = number + Math.pow(26, s.length - 1 - i) * (s.charCodeAt(i) - 64);
    }
    return number;
}