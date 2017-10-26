/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function (flowers, k) {

    var blooming = [];
    var found = false;
    blooming = flowers.splice(0, 1);
    var counter = 2;

    while (((flowers.length > 0) && !found) || (found && !(flowers.length > 0))) {
        if (blooming.length == 1) {
            if (blooming[0] > flowers[0]) {
                blooming = flowers.splice(0, 1).concat(blooming[0]);
            }
            else {
                blooming = blooming.concat(flowers.splice(0, 1));
            }
        }
        for (var i = 0; i < blooming.length - 1; i++) {
            if ((Math.abs(blooming[i] - blooming[i + 1]) - 1) == k) {
                found = true;
                break;
            }
        }
                
        if (!found && flowers.length > 0) {
            sortIt(blooming, flowers.splice(0, 1));
            counter++;
        }
    }
    if (!found) {
        return -1;
    }
    else {
        return counter;
    }
};

var input = [48,27,71,68,30,1,45,22,23,95,35,41,65,100,54,15,75,67,31,79,36,26,5,40,88,25,7,77,16,59,74,52,14,60,98,34,82,10,96,70,73,92,55,66,28,69,19,94,53,42,64,50,89,46,80,72,76,63,81,33,3,85,99,13,86,29,8,4,51,11,62,78,39,32,44,17,38,49,20,84,24,57,93,18,37,83,6,61,12,91,90,47,97,2,56,43,58,21,9,87];
var number = 89;
console.log(kEmptySlots(input, number));