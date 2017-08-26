/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var number = [];
    number.push(0);
    for(var i = 1; i <= num; i++)
        {
            var count = 0;
            var numbero = i;
            while(numbero > 0)
                {
                    if(numbero % 2 == 1)
                        {
                            count = count + 1;
                        }
                    numbero = Math.floor(numbero / 2);
                }
                number.push(count);
        }
        return number;
};

console.log(countBits(5));