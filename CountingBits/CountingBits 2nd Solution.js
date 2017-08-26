/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var offset = 1;
    var result = [];
    result.push(0);
    for(var index = 1; index < num + 1; ++index)
        {
            if(offset * 2 == index)
                {
                    offset = offset * 2;
                }
                result.push(result[index - offset] + 1);
        }
        return result;
};

console.log(countBits(2));