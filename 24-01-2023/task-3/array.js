//array-it is a data type of javascript which store different data type of data in store in array;
//var a=[10,20,30] every element has index;

// array declaration;
var arr = [10, 20, 30, 40];
//console.log(arr[0]);
for (var a = 0; a < arr.length; a++) {
  console.log(arr[a]);
}

//array store different type of data in array
var arr1 = [10, "surya", "pratap", true, null];

for (var i = 0; i < arr.length; i++) {
  console.log(arr1[i]);
}
//[] scare bracket;
//another way to create array
var arr2 = new Array(12, 13, 14, 15);
arr2[4] = 17;
for (var a = 0; a < arr2.length; a++) {
  console.log(arr2[a]);
}

//take input from user
// var arr3=new Array(3);
// for(var g=0;g<3;g++)
// {
//     arr3[g]=window.prompt("Enter the value:-");
// }

//multidimensional array;
var arr3 = [
  [1, 2, 3, "sury"],
  ["prtap", 4, 5],
  ["sohan", 67, null],
];

for (var a = 0; a < arr3.length; a++) {
  console.log(arr3[a]);
}
for (var a = 0; a < arr3.length; a++) {
  //console.log(arr3[a]);
  for (var b = 0; b < arr3[a].length; b++) {
    console.log(arr3[a][b]);
  }
  console.log("  ");
}

//javascript modify method
//it is mutable type;
var arr4 = ["surya", 18, "male", "b.tech"];
arr4[0] = "pratap";
console.log(arr4[0]);

//delete method in array;
delete arr4[2];
for (var a = 0; a < arr4.length; a++) {
  console.log(arr4[a]);
}

//array sort function in javascript
//sort method in array;

var arr5 = [45, 3, 70, 0];
arr5.sort();
arr5.reverse(); //reverse array;
for (var a = 0; a < arr5.length; a++) {
  console.log(arr5[a]);
}

//pop and push;
arr5.pop(); //last index;
arr5.push(10);
for (var a = 0; a < arr5.length; a++) {
  console.log(arr5[a]);
}
console.log();
//shift & unshift
arr5.shift();
arr5.unshift(100);
for (var a = 0; a < arr5.length; a++) {
  console.log(arr5[a]);
}
console.log();
//concat and join
var arr6 = ["spma", "sona"];
var c = arr5.concat(arr6, arr4);
for (var a = 0; a < c.length; a++) {
  console.log(c[a]);
}
console.log();
//join for create a single value;
var d = c.join(" ");
console.log(d);
// for(var a=0;a<d.length;a++)
// {
//     console.log(d[a]);
// }

//slice(start,end);
var arr6 = arr5.slice(0, 4);
for (var a = 0; a < arr6.length; a++) {
  console.log(arr6[a]);
}
console.log();

var arr6 = arr5.slice(1);
for (var a = 0; a < arr6.length; a++) {
  console.log(arr6[a]);
}

//splice function in array;splice(index,howmany,"new value",delete);
arr6.splice(2, 0, "New", "car");
for (var a = 0; a < arr6.length; a++) {
  console.log(arr6[a]);
}

console.log();
var a = "surya";
var b = Array.isArray(a);
console.log(b);

//array mehtod find & findIndex;

var ages = [10, 23, 19, 20];
var adultAge = 18;
//find return fist value;
//findIndex return first who setisfied the condition they return index;
var b = ages.find(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(b);
console.log();
var b = ages.findIndex(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(b);

//filter method in array;
//it create a array;

var b = ages.filter(checkAdult);
function checkAdult(age) {
  return age >= 18;
}
console.log(b);

//to string method
var str = b.toString();
console.log(str);

//print arr5 value;
console.log(arr5.valueOf());

console.log();

//forEach
arr5.forEach((value) => {
  console.log(value);
});

//map function  in array
var arr7=[10,20,29];
var arr8=arr7.map((value)=>{
    return value*10;
})
console.log(arr8);
