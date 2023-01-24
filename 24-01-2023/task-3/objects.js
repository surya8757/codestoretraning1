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