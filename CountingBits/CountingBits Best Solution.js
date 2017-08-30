var countBits = function(num) {
    var res = [0];
    var lastSquare;
    var nextSquare = 1;

    for (var i = 1; i <= num; i ++) {
      if (i === nextSquare) {
        res.push(1);
        lastSquare = nextSquare;
        nextSquare = nextSquare * 2;
      } else {
        res.push(res[i - lastSquare] + 1);
      }
    } 
    return res;   
  };

