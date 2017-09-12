/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    var newPeople = mergesort(people);
    console.log(newPeople);
    Array.prototype.move = function (old_index, new_index) {
        if (new_index >= this.length) {
            var k = new_index - this.length;
            while ((k--) + 1) {
                this.push(undefined);
            }
        }
        this.splice(new_index, 0, this.splice(old_index, 1)[0]);
        return this; // for testing purposes
    };
    for(var currentPosition = 0; currentPosition < newPeople.length; currentPosition++)
    {
        if(currentPosition > newPeople[currentPosition][1])
        {
            newPeople.move(currentPosition,newPeople[currentPosition][1]);
        }
    }

    function mergesort(arr) {
        if (arr.length < 2) {
            return arr;
        }
        var middle = parseInt(arr.length / 2);
        var left = arr.splice(0, middle);
        var right = arr;
        return merge(mergesort(left), mergesort(right));
    }

    function merge(left, right) {
        var result = [];
        if (left !== undefined && right !== undefined) {
            while (left.length && right.length) {
                if (left[0][0] > right[0][0]) {
                    result.push(left.shift());
                }
                else if(left[0][0] == right[0][0])
                {
                    if(left[0][1] < right[0][1])
                    {
                        result.push(left.shift());
                    }
                    else{
                        result.push(right.shift());
                    }
                }
                else {
                    result.push(right.shift());
                }
            }

            while (left.length) {
                result.push(left.shift());
            }
            while (right.length) {
                result.push(right.shift());
            }
        }
        return result;
    }

    return newPeople;
};