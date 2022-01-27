//lexical scope=>
function lex(){
    const myVar="value1";

    function myfunction(){
        //const myVar="value22";
        console.log("inside function",myVar);
    }

    console.log(myVar);
    myfunction();
}
lex();
// In the consitions of lexical function 
//the JS first check the given variable required 
//in the function area ,if it is not present 
//in the functions area the it used the same 
//variable from the 
//main function  example is given above
