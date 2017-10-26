/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
var kEmptySlots = function (flowers, k) {

    function sortIt(a, current) {
        if (current < a[0]) {
            blooming = current.concat(a);
            return true;
        }
        else if (current > a[a.length - 1]) {
            blooming.push(current[0]);
            return true;
        }
        var middle = Math.floor(a.length - 1 / 2);
        var sortComplete = false;

        while (!sortComplete) {
            if (current > a[middle] && current < a[middle + 1]) {
                blooming = a.splice(0, middle + 1).concat(current).concat(a.splice(0, a.length));
                sortComplete = true;
            }
            else if (current > a[middle]) {
                middle++;
            }
            else if (current < a[middle]) {
                middle = Math.floor(middle / 2);
            }
        }
        return true;
    }

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
        if (!found) {
            sortIt(blooming, flowers.splice(0, 1));
            counter++;
        }
    }
    console.log(blooming);
    if (!found) {
        return -1;
    }
    else {
        return counter;
    }
};

var input = [6,5,8,9,7,1,10,2,3,4];
var number = 2;
console.log(kEmptySlots(input, number));