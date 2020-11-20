/*Return the provided string with the first letter of 
each word capitalized. Make sure the rest of the word 
is in lower case.*/

function titleCase(str) {
    let original=str.toLowerCase().split(" ");
    let words=[];

    for(let i=0; i<original.length; i++){
        let val=original[i];
        words.push(val.replace(val[0], val[0].toUpperCase()));
    }

    return words.join(" ");
  }
  
    titleCase("I'm a little tea pot");