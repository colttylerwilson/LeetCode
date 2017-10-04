/**
Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. 
There is no limit on how many times a digit can be reused.

You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function (time) {
    var timeArray = [];
    timeArray.push(time.slice(0, 1));//H
    timeArray.push(time.slice(1, 2));//H
    timeArray.push(time.slice(3, 4));//M
    timeArray.push(time.slice(4, 5));//M
    var sortedTime = [];
    sortedTime.push(time.slice(0, 1));//H
    sortedTime.push(time.slice(1, 2));//H
    sortedTime.push(time.slice(3, 4));//M
    sortedTime.push(time.slice(4, 5));//M
    sortedTime.sort();
    var nextTime = [];
    var topLimit = [2, 9, 5, 9];
    var bottomLimit = [0, 0, 0, 0];
    var closestFound = false;
    var newTime = [];
    newTime.push(time.slice(0, 1));//H
    newTime.push(time.slice(1, 2));//H
    newTime.push(time.slice(3, 4));//M
    newTime.push(time.slice(4, 5));//M

    while (!closestFound) {
        var counter = 0;
        for (var i = 3; i >= 0; i--) {
            for (var x = 0; x < 4; x++) {
                newTime[i] = sortedTime[x];
                if(newTime[i] > timeArray[i])
                {
                    //If the newTime is greater than the original time
                    //And newTime is in range 00:00 to 23:59
                    //Then newTime is next closest time to 'time' input
                    for(var k = 0 ; k < newTime.length; k++) {
                        if(newTime[k] <= topLimit[k] && newTime[k] >= bottomLimit[k]) {
                            counter++;
                        }
                        if(k == 1 && newTime[0] == 2) {
                            if(newTime[k] > 3) {
                                counter--;
                            }
                        }
                    }
                }
                if(counter == 4) {
                    closestFound = true;
                    break;
                }
                counter = 0;
            }
            if(closestFound)
            {
                break;
            }
            newTime[i] = sortedTime[0];
        }
        closestFound = true;
    }
    if(!closestFound) {
        for(var z=0; z<newTime.length;z++) {
            newTime[z] = sortedTime[0];
        }
    }
    var temp = newTime[0] + newTime[1] + ":" + newTime[2] + newTime[3];
    return temp;
};

var input = "20:48";
console.log(nextClosestTime(input)); 