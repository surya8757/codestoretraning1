//static method implementation;
//it is keyword
//it is always used inside the class itself;
//static properties cannot be directly accessed on the class itself;
class ClassStaticMethod{
    static name='some';
    static staticMethod()
    {
        return 'static method';
    }
    //if class is call it is always call;
    static{
        console.log("Hello everyone");
    }
}

const obj1=new ClassStaticMethod();
//console.log(obj1.name); it is undefined;
console.log(ClassStaticMethod.name);


//static fields without initializers to undefined
//public static class field are not reintialized on subclasses;
//this refers to current class where as super refers to base class constructor
class ClassWithStaticField {
    static baseStaticField = "base static field";
    static anotherBaseStaticField = this.baseStaticField;
  
    static baseStaticMethod() {
      return "base static method output";
    }
  }
  
  class SubClassWithStaticField extends ClassWithStaticField {
    //super is used for base class object;
    static subStaticField = super.baseStaticMethod();
  }
  console.log(ClassWithStaticField.anotherBaseStaticField);
  console.log(SubClassWithStaticField.subStaticField);


  //calling static members form another static method;
  class StaticMethodCall {
    static staticProperty = "static property";
    static staticMethod() {
      return `Static method and ${this.staticProperty} has been called`;
    }
    static anotherStaticMethod() {
      return `${this.staticMethod()} from another static method`;
    }
  }
  StaticMethodCall.staticMethod();
  // 'Static method and static property has been called'
  
  StaticMethodCall.anotherStaticMethod();
  // 'Static method and static property has been called from another static method'
  

  //calling static members form a class constructor and other methods;
  //static members are not directly accessible using the this keyword form non-static method
  //used to call them using classname
  class StaticMethodCall {
    constructor() {
      console.log(StaticMethodCall.staticProperty); // 'static property'
      console.log(this.constructor.staticProperty); // 'static property'
      console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
      console.log(this.constructor.staticMethod()); // 'static method has been called.'
    }
  
    static staticProperty = "static property";
    static staticMethod() {
      return "static method has been called.";
    }
  }
  



