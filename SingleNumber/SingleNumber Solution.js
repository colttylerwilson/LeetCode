/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //Container for the result
        var result = 0;
        for(var i = 0 ; i < nums.length; i++)
        {
            //XOR all elements in the array
            //This works becuase if you have two of the same numbers,
            // then XORing them together will give you a balance of ZERO
            //What remains after XORing all elements in the array is the single number
            result = result ^ nums[i];
        }
        return result;
};