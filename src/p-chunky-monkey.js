/**
 * Problem Explanation
Our goal for this Algorithm is to split arr (first argument) 
into smaller chunks of arrays with the length provided by 
size (second argument). There are 4 green checks (objectives) 
our code needs to pass in order to complete this Algorithm:

(['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]
 */

function chunkArrayInGroups(arr, size) {
    var newArr = [];
    while (arr.length) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
  }

/**
 * Code Explanation
Firstly, we create a variable. newArr is an empty 
array which we will push to.
Our while loop loops until the length of the array 
in our test is not 0.
Inside our loop, we push to the newArr array using 
arr.splice(0, size).
For each iteration of while loop, it deletes size 
number of elements from the front of arr and push 
them as an array to newArr.
Finally, we return the value of newArr.
 */