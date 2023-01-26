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

//entires it print in array form
const entires=Object.entries(a);
console.log(entires);

//for in loop
for([keys,value] of entires)
{
    console.log(`${keys}:-${value}`);
}
console.log("\n");

var arr1=Object.keys(a);
console.log(arr1);





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


//object nested
let obj12={};

obj12={
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

const arr12 = ["a", , "c"];
const sparseKeys = Object.keys(arr12);
const denseKeys = [...arr12.keys()];
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
// Expected output



//object.prototype is always null

//null prototype in javascript
const obj = Object.create(null);
const obj2 = { __proto__: null };
//the constructure data properties of an object;
const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object; // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true

const o = new TypeError(); // Inheritance: TypeError -> Error -> Object



const arr = [];
arr.constructor = String;
arr instanceof String; // false
arr instanceof Array; // true

//object assign method
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
const obj1 = { a: 1 };
const copy = Object.assign({}, obj1);
console.log(copy); // { a: 1 }

//create object method
const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true;

//define properties method
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(object1.property1);
// Expected output: 42

//enteries;
const object2 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object2)) {
    console.log(`${key}: ${value}`);
  }

  //
  const obj3 = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj3));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}

const obj4= {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj4.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj4.prop);
  // Expected output: 42

  const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj5 = Object.fromEntries(entries);
  
  console.log(obj5);
  // Expected output: Object { foo: "bar", baz: 42 }


  const object7 = {
    prop: 'exists'
  };
  
  console.log(Object.hasOwn(object7, 'prop'));
  // Expected output: true
  
  console.log(Object.hasOwn(object7, 'toString'));
  // Expected output: false
  
  console.log(Object.hasOwn(object7, 'undeclaredPropertyValue'));
  // Expected output: false
  
//check
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true


const object8 = {};

console.log(Object.isExtensible(object8));
// Expected output: true

Object.preventExtensions(object8);

console.log(Object.isExtensible(object8));
// Expected output: false

const object9 = {
    property1: 42
  };
  
  console.log(Object.isFrozen(object9));
  // Expected output: false
  
  Object.freeze(object9);
  
  console.log(Object.isFrozen(object9));
  // Expected output: true

//value
  const object10 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object10));
  // Expected output: Array ["somestring", 42, false]

  //seal
  const object11 = {
    property1: 42
  };
  
  Object.seal(object11);
  object1.property1 = 33;
  console.log(object11.property1);
  // Expected output: 33
  
  delete object1.property1; // Cannot delete when sealed
  console.log(object11.property1);
  // Expected output: 33