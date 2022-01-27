//object 
//array is good but not sufficient 
//for real world
//obgect store key values in pairs
//object does not have index

//how to create object 

const person={name:"kartikeya",age:21};
console.log(person);
console.log(person.name);
console.log(person.age);
//we can create array in objects
const person1={
    name:"Kartikeya kushwaha",
    age:21,
    hobbies:["teaching","Coding","Maths","playing Football"]

}
console.log(person1);
console.log(person1.hobbies);
//how to add key value pair to object
person1.gender="male";
console.log(person1);
//other method to  access the data from object
console.log(person1["hobbies"]);
//differnce between dot and bracket notation

