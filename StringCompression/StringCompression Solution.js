/**
 * All characters have an ASCII value in [35, 126]
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    var number = 1;
    for (var i = chars.length - 1; i >= 0; i--) {
        while (chars[i] == chars[i - 1]) {
            chars.pop();
            number++;
        }
        if (number > 1) {
            chars.push(number);
            numbers = 1;
        }
    }
    console.log(chars);
};

var character = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "c", "c", "c"];
compress(character);