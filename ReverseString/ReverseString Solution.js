/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var r = "";
    for(let i = s.length ; i > 0; i--) {
        r = r.concat(s.substring(i, i-1));
    }
    return r;
};