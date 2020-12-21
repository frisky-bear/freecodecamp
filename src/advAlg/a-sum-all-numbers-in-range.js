function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (let i = min; i <= max; i++) {
        temp += i;
    }
    return temp;
}

sumAll([1,4]);

/**
 * Code Explenation
 * 
 * First create a variable to store the max number between two.
 * 
 * The same as before for the Smallest number.
 * 
 * We create a temporary variable to add the numbers.
 * 
 * Since the numbers might not be always in order, using max() and min()
 * will help organize.
 */