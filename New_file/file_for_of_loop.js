//for of loop in array
const fruits=["Apple","Grapes","Mango"];
const fruit1=[]
for(let fruit of fruits){
   fruit1.push(fruit.toUpperCase());
}
console.log(fruit1);
//-------------------------------------------
//for in loop in array
const fruit3=["Apple","Grapes","Mango"];
for(let index in fruit3){
    console.log(fruit3[index]);
}