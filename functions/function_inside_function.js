//fuction inside function
function firstfunc(){
    const myfunction=() =>{
        console.log("Hello World..com");
    }
    const myfunction2=(num1,num2) =>{
        return num1+num2;
}
const max=(num1,num2) =>num1*num2;

console.log("inside functions");
myfunction();
console.log(myfunction2(4,6));
console.log(max(4,6));

}
firstfunc();
