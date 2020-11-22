/**
 * Code Explanation
Create an empty string variable to store the 
repeated word.

Use a while loop or for loop to repeat code 
as many times as needed according to num

Then we just have to add the string to the 
variable created on step one, and increase 
or decrease num depending on how you set 
the loop.

At the end of the loop, return the variable 
for the repeated word.
 */

function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

/**
 * Code Explanation
We start off with a simple if statement to determine 
one of two outcomes…

If our string length is greater than the num we 
want to truncate it, we return a slice of our 
string starting at character 0, and ending at num. 
We then append our '...' to the end of the string.

However, if above situation is not true, it means 
our string length is less than our truncation num. 
Therefore, we can just return the string.
 */