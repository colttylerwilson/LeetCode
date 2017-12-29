/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    var stack = [];
    var oldColor = image[sr][sc];
    if(oldColor == newColor){
        return image;
    }
    stack.push(new Array(sr, sc));
    image[sr][sc] = newColor;
    while (stack.length > 0) {
        console.log(image);
        sr = stack[stack.length-1][0];
        sc = stack[stack.length-1][1];
        if (sc+1 < image[0].length && image[sr][sc + 1] == oldColor) {
            stack.push(new Array(sr, sc + 1));
            image[sr][sc + 1] = newColor;
            sc++;
        }
        else if (sc-1 >= 0 && image[sr][sc - 1] == oldColor) {
            stack.push(new Array(sr, sc - 1));
            image[sr][sc - 1] = newColor;
            sc--;
        }
        else if (sr+1 < image.length && image[sr + 1][sc] == oldColor) {
            stack.push(new Array(sr + 1, sc));
            image[sr + 1][sc] = newColor;
            sr++;
        }
        else if (sr - 1 >= 0 && image[sr - 1][sc] == oldColor) {
            stack.push(new Array(sr - 1, sc));
            image[sr - 1][sc] = newColor;
            sr--;
        }
        else {
            stack.pop();
        }
    }
    return image;
};