/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort(function(a,b){return a-b});
    var number = 0;
    for (var i = 0; i < nums.length; i = i + 2) {
        number = number + parseInt(nums[i]);
    }
    return number;
};