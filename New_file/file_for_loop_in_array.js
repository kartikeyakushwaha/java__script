//for loop in array
let fruits=["apple","pineapple","Mango","Grapes","Banana"];
console.log(fruits.length);
//console.log(fruits[4]);
//for(let i=0;i<fruits.length;i++){
  //  console.log(fruits[i].toUpperCase());

///----------------------------------------------------------------------------------------
let fruitsCap=[];
for(let i=0;i<fruits.length;i++){
fruitsCap.push(fruits[i].toUpperCase());
}
console.log(fruitsCap);
///---->we use Const in place of let in array 
//to make the array  not change able in the futher program
//but we can use push() when const variable is used in the Array
const fruits3=["apple","pineapple","Mango"];
fruits3.push("grapes");
console.log(fruits3);