//Private class features
//class fields are public by default;
//private class members can be created by using a hash #prefix.
class ClasswithPrivate {
  #name;
  #age = 22;

  #privateMethod() {
    //method body;
  }
  static #field;
  static #num1 = 20;

  static #privateStatiMethod() {}
}

class c {
  #x;
  static getx(obj1) {
    return obj1.x;
  }
}
console.log(c.getx(new c())); //it give undefined;
console.log(c.getx({}));

//private instance field

class ClasswithPrivateField {
  #privateField;
  constructor() {
    this.#privateField = 42;
  }
}

//private class instance field;
class Subclass extends ClasswithPrivateField {
  #subPrivateField;
  constructor() {
    super();
    this.#subPrivateField = 23;
  }
}

new Subclass();

// returning overriding object;
//this also work as getter;
class Stamper extends class {
  // A base class whose constructor returns the object it's given
  constructor(obj) {
    return obj;
  }
} {
  // This declaration will "stamp" the private field onto the object
  // returned by the base class constructor
  #stamp = 42;
  static getStamp(obj) {
    return obj.#stamp;
  }
}

var obj = {};
new Stamper(obj);
// `Stamper` calls `Base`, which returns `obj`, so `obj` is
// now the `this` value. `Stamper` then defines `#stamp` on `obj`

console.log(obj); // In some dev tools, it shows {#stamp: 42}
console.log(Stamper.getStamp(obj)); // 42
console.log(obj instanceof Stamper); // false


console.log();

//private static field;
//private static field only accessible on the class itself
class ClassWithPrivateStaticField {
    static #PRIVATE_STATIC_FIELD;
  
    static publicStaticMethod() {
        ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
      return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
    }
  
    publicInstanceMethod() {
           //this.#PRIVATE_STATIC_FIELD = 42;
        ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
      return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
    }
  }
  
  const obj2=new ClassWithPrivateStaticField();
  console.log(obj2.publicInstanceMethod());
  //console.log(obj2.publicStaticMethod());
//   console.log(ClassWithPrivateStaticField.publicStaticMethod()); // 42
//   console.log(new ClassWithPrivateStaticField().publicInstanceMethod()); // 42
  










console.log();
//this constructor method;
class Person {
  //it is public object;
  fullName;
  constructor(name) {
    this.fullName = name;
  }
  introduceSelf() {
    console.log(`Hi! I'M ${this.fullName}`);
  }
}

var obj = new Person("surya pratap");
obj.introduceSelf();

//omitting constructors
class Calculator {
  Add() {
    return 5 + 6;
  }
}

var obj1 = new Calculator();
console.log(obj1.Add());

//inheritance in class;
//here Professor is a sub class or child class of Person
class Professor extends Person {
  teacher;
  constructor(name, teacher) {
    super(name);
    this.teacher = teacher;
  }
  //here override the properties of super class
  introduceSelf() {
    console.log(
      `My name is ${this.fullName},and I will be your ${this.teacher} professor.`
    );
  }
  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

const surya = new Professor("surya", "Psychology");
surya.introduceSelf();
surya.grade("my paper");

//Encapsulation
