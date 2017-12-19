/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var add = function(a, b) {
        return b == 0 ? a : add(a^b, (a&b)<<1);
    }
    return add(a,b);
};

console.log(getSum(3,2));