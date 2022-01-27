//push()
//pop()
//unshift()--->use to add element from the stating
//              of the given array..
//shift---->use to remove the element from the stating of the given array

let fruits=["apple","mango","grapes"];
console.log(fruits);
//push--->add the element in array from end 
fruits.push("banana");
console.log(fruits);
//pop ---->remove last element and return the 
//removed element..
let poped= fruits.pop();
console.log(fruits);
console.log("popped fruits is ",poped);
//unshift()
fruits.unshift("pineapple");
console.log(fruits);
//shift()----->after the removing of the element from the array shift return the element;

fruits.shift();
console.log(fruits);
//shift and unshift slow as compare to the push and pop function
//because it wants to check all the element of the array;
// 