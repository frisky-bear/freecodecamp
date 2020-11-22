/**
 * Problem Explanation
The program is very simple, we have to take a 
variable and return that variable being repeated 
certain amount of times. No need to add space or 
anything, just keep repeating it into one single 
string.
 */

function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3);

/**
 * Code Explanation
Create an empty string variable to store the repeated word.

Use a while loop or for loop to repeat code as many times 
as needed according to num

Then we just have to add the string to the variable 
created on step one, and increase or decrease num 
depending on how you set the loop.

At the end of the loop, return the variable for the repeated word.
 */