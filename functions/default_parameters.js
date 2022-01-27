//default_parameters

function add(a,b=1){
    return a+b;
}
const ans =add(4,6);
console.log(ans);

///-------------------------------------------------------------------
//Rest parameters
function my(a,b,...c){
    console.log('a is ${a}');
    console.log('b is ${b}');
    console.log('c is ${c}');
}
my(2,4,5,6,7,54,4);