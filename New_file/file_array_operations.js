//1)how to clone array?

let arr1=["apple","mango","pineapple"];
let arr2=arr1.slice(0);
//--->first method to find the second array (cloning of array)
let arr2=[].concat(arr1);
//second method of cloning
 //spread operator---> [...arr1]
let arr2=[...arr1];
//third method of cloning
//2)how to concatenation two array???
//--->concat()
let arr2=arr1.slice(0).concat(["grapes"]);
console.log(arr1);
console.log(arr2);
