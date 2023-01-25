//object same work as array;(key,value);

var a = {
  firstName: "Ram",
  lastName: "kumar",
  age: 20,
  country: "India",
  b: [10, 11, 19],
  salary: function () {
    return 1000;
  },
};
console.log(a);
console.log(a.firstName);
console.log(a.b);
console.log(a.salary());

//second method

var a = new Object();
a.firstName = "ram";
console.log(a);
//console.log(a[firstName]);

//push object in array
var student=[
    {name:"ram",age:45},
    {name:"surya",age:22},
];
console.log(student);

for(var a=0;a<student.length;a++)
{
    console.log(student[a].name);
}

let obj1={};

obj1={
    student:{
        id:123,
        name:"ram",
        age:45,
},
car:{
    id:1234,
    name:"bmw",
    price:2222000,
},
prod:[
    {
        id:1234,
        name:"bmw",
        price:2222000,
    },
    {
        id:12345,
        name:"safari",
        price:5000000
    }
]
};

console.log(obj1.student);
console.log(obj1.prod[0].id);

//direct object is not itrable
// for(const keys of obj1[student])
// {
//     console.log(keys);
// }

const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]



//entries always return iterator;it show the values in keys and values pair

var array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// Expected output: Array [0, "a"]

console.log(iterator1.next().value);



//reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)

console.log();
var array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

