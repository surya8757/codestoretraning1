//get syntax binds an object property to a function;
//get is used to in function in a object or class;
const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
        //here this properties of the object;
      return this.log[this.log.length - 1];
    }
  };
  
  console.log(obj.latest);


//getter is used in class;
  console.log();

  class ClassWithGetSet {
    #msg = "hello world";
    get msg() {
      return this.#msg;
    }
    set msg(x) {
      this.#msg = `hello ${x}`;
    }
  }
  const instance = new ClassWithGetSet();
  console.log(instance.msg); // "hello world"
  
  instance.msg = "cake";
  console.log(instance.msg); // "hello cake"
  

