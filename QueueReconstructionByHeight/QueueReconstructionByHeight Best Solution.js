/**
 * @param {number[][]} people
 * @return {number[][]}
 */

 //Take the people array and use them for this constant function
const reconstructQueue = (people) => {
    //Sorting the people array
    people.sort((a, b) => {
        //If a.height and b.height are equal
        //Then the array variable with the greater secondary number goes after the variable with the lesser number
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      //Sort from largest height to smallest height
      return b[0] - a[0];
    });

    console.log("peeps" + people);
    //The array that is returned
    const ret = [];
    //For all variables in people
    for (const p of people) {
        //0 is the number of items removed
        //If set to 0, then no items will be removed
        //Basically, we are moving each variable to the position of its secondary value
      ret.splice(p[1], 0, p);
    }
    return ret;
  };