/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    var stack = [];
    var total = 0;
    for (var i = 0; i < ops.length; i++) {
        if(Number.isInteger(parseInt(ops[i]))) {
            stack.push(parseInt(ops[i]));
        }
        else if(ops[i] === "C") {
            stack.pop();
        }
        else if(ops[i] === "D") {
            stack.push(stack[stack.length - 1] * 2);
        }
        else{
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        }
    }

    stack.forEach(function(element) {
        total = total + element;
    });

    return total;
};

var input = ["5", "2", "C", "D", "+"];
calPoints(input);