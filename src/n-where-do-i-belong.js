/* This can be a tricky problem to understand. 
You need to find where in the array a number 
should be inserted by order, and return the 
index where it should go. */

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num) return a;
    }
  
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);

  /* Code Explanation
First I sort the array using .sort(callbackFunction) 
to sort it by lowest to highest, from left to right.
Then I use a for loop to compare the items in the 
array starting from the smallest one. When an item 
on the array is greater than the number we are 
comparing against, then we return the index as an 
integer. */