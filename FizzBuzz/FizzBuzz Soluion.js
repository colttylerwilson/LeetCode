/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var r = [];
    for (var i = 1; i < n+1; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            r.push("FizzBuzz")
        }
        else if (i % 3 == 0) {
            r.push("Fizz")
        }
        else if (i % 5 == 0) {
            r.push("Buzz")
        }
        else {
            r.push(i.toString());
        }
    }
    return r;
};