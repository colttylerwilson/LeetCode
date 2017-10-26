/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var newNums = new Array(nums.length);
    for(var i = 0 ; i < nums.length; i++) {
        newNums[nums[i] - 1] = 1;
    }
    var returned = [];
    for(var i = 0; i < newNums.length; i++) {
        if(newNums[i] != 1) {
            returned.push(i + 1);
        }
    }

    return returned;
};