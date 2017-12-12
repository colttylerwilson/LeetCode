/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    for(var i = 0 ; i < bits.length; i++) {
        if(i == bits.length - 2) {
            if(bits[i] == 1) {
                return false;
            }
            else {
                return true;
            }
        }
        if(i == bits.length - 1) {
            return true;
        }
        if(bits[i] == 1) {
            i++;
        }
    }
};