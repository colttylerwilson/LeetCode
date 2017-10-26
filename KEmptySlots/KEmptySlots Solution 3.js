/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function (flowers, k) {
    if (flowers == null || flowers.length == 0 || k + 2 > flowers.length) {
        return -1;
    }

    var n = flowers.length;
    var days = new Array(n);

    for (var i = 0; i < n; i++) {
        var index = flowers[i] - 1;
        days[index] = i + 1;
    }
    //Days says...
    //days[i] = x
    //flower i blooms on day x
    //Days array is an array of days,
    //The index of the days array is the flower number
    //Days[0] == the day that flower 0 will bloom
    console.log(days);

    //res = 999999;
    var res = Number.MAX_VALUE;
    var left = 0;
    //right = 2;
    var right = k + 1;


    //i is in the middle of left and right
    //left = 0;
    //i = 1;
    //right = 2;
    for (var i = 1; i < n; i++) {
        //max = max(days[1], days[2]);
        //max = 3
        var max = Math.max(days[left], days[right]);
        //days[i] == 2
        //if(2 <= 2)
        if (days[i] <= max) {
            if (i == right) {
                res = Math.min(max, res);
            }
            left = i;
            right = left + k + 1;
            if (right >= n) break;
        }
    }
    return (res == Number.MAX_VALUE) ? -1 : res;
};

var input = [1,2,3,6,4,5];
var number = 2;

console.log(kEmptySlots(input, number));