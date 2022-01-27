//trim()
//toUpperCase()
//toLowerCase()
// slice

// trim()-------->Remove the Space in the staring and ending;
let firstName="   Kartikeya Kushwaha    ";
//console.log(firstName.length);

//console.log(firstName[firstName.length-2]);
let newString=firstName.trim();
console.log(newString);
console.log(newString.length);

//   toUpperCase()--------> Change in  capital letter

let firstname=firstName.toUpperCase();
console.log(firstname);

//toLowerCase()--->Change all letter in small letter

  let newstring=firstName.toLowerCase();
console.log(newstring);

//slice()------->cut the give part 
let lastName=firstName.slice(1,5);
console.log(lastName);
