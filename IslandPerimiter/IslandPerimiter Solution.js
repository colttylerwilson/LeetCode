/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    var number = 0;
    for (var outer = 0; outer < grid.length; outer++) {
        for (var inner = 0; inner < grid[outer].length; inner++) {
            if (grid[outer][inner] == 1) {
                grid[outer][inner] = 2;
                number = number + 4;
                //Check right
                if (inner + 1 < grid[outer].length) {
                    if (grid[outer][inner + 1] == 1) {
                        number = number - 1;
                        grid[outer][inner + 1] = 2;
                        number = number + check(outer, inner + 1);
                    }
                }
                //Check down
                if (outer + 1 < grid.length) {
                    if (grid[outer + 1][inner] == 1 || grid[outer + 1][inner] == 2) {
                        number = number - 1;
                        if (grid[outer + 1][inner] == 1) {
                            grid[outer + 1][inner] = 2;
                            number = number + check(outer + 1, inner);
                        }
                    }
                }
            }
        }
    }

    function check(first, second) {
        var checkNumber = 4;
        //Check left
        if (second - 1 >= 0) {
            if (grid[first][second - 1] == 1 || grid[first][second - 1] == 2) {
                checkNumber = checkNumber - 1;
                if (grid[first][second - 1] == 1) {
                    grid[first][second - 1] = 2;
                    checkNumber = checkNumber + check(first, second - 1);
                }
            }
        }
        //Check right
        if (second + 1 < grid[first].length) {
            if (grid[first][second + 1] == 1 || grid[first][second + 1] == 2) {
                checkNumber = checkNumber - 1;
                if (grid[first][second + 1] == 1) {
                    grid[first][second + 1] = 2;
                    checkNumber = checkNumber + check(first, second + 1);
                }
            }
        }
        //Check up
        if (first - 1 >= 0) {
            if (grid[first - 1][second] == 1 || grid[first - 1][second] == 2) {
                checkNumber = checkNumber - 1;
                if (grid[first - 1][second] == 1) {
                    grid[first - 1][second] = 2;
                    checkNumber = checkNumber + check(first - 1, second);
                }
            }
        }
        //Check down
        if (first + 1 < grid.length) {
            if (grid[first + 1][second] == 1 || grid[first + 1][second] == 2) {
                checkNumber = checkNumber - 1;
                if (grid[first + 1][second] == 1) {
                    grid[first + 1][second] = 2;
                    checkNumber = checkNumber + check(first + 1, second);
                }
            }
        }
        return checkNumber;
    };
    return number;
};

var island =
    [[1, 1], [1, 1]];

console.log(islandPerimeter(island));