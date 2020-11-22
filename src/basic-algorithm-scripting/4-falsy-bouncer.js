/* Remove all falsy values from an array. */

function bouncer(arr) {
    return arr.filter(Boolean);
  }

bouncer([7, "ate", "", false, 9]);

/* Code Explanation
The Array.prototype.filter method expects a 
function that returns a Boolean value which 
takes a single argument and returns true for 
truthy 1.3k value or false for falsy 1.5k value. 
Hence we pass the built-in Boolean function. */