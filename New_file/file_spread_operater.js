//spread operater
//used in coloning of element in array
//how to used spread operater in objects
const obj1={
    key1:"value1",
    key2:"value2",
 //we can not use same key value in the for two value if used then the last used value is reflected in that key

}
const obj2={
    key3:"value3",
    key4:"value4",
};
const newobject ={...obj1, ...obj2,key6:"value36 "};
console.log(newobject);

