//var example
//var is global scope it global scope 
//we can see using debugger in javascript
var a=10;
{
    var a=15;
    console.log(a);
}
//{} it is block here print both lower and upper console same value;
console.log(a);
// console.log(a);


//const example in javascript
//it is declaration create a block scope much like variable  it cann't change reassignment and cann't redeclared;
//const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]] (it follow this type of syntex)

const b=100;
//const a=10;it give error for it is already decleared;
console.log(b);


//let  example in javascript
//let declaration declares a block-scoped local variable, optionally initializing it to a value.
//local variable:- the varible which is bound in the local scope;

let x=5;
if(x==5)
{
    x=10;
    console.log(x);
    // x=10 and not 5 because of local scoping
}
console.log(x);
//here x =5;

// here is block scope behavour of let
let c=10;
{
    let c=15;
    // here c give 15
    console.log(c);
}
//here c give 10
console.log(c);
