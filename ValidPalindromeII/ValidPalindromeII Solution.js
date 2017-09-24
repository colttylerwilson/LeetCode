/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i) != s.charAt(s.length - 1 - i)) {
            var firstNewString = s.slice(0, i) + s.slice(i + 1, s.length);
            var secondNewString = s.slice(0, s.length - 1 - i) + s.slice(s.length - i, s.length);
            if (checkNewString(firstNewString) || checkNewString(secondNewString)) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    return true;

    function checkNewString(ss) {
        for (var i = 0; i < ss.length; i++) {
            if (ss.charAt(i) != ss.charAt(ss.length - 1 - i)) {
                return false;
            }
        }
        return true;
    }
};