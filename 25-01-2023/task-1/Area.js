//class
// class Area{
//     //constructor
//     constructor()
//     {
//         //constructor field;
//     }
//     //instance field;
//     name="surya";
//     age=22;
//     //method field
//       rect(){
//         //method field;
//     }
//     //static instance
//     static height=172;
//     //static method 
//     static sq()
//     {
//         //static method field;
//     }
//     //private vaue
//     #num1=10;
// }
//class class expression method
// const reactangle=class{
//     constructor(height,width)
//     {
//         this.height=height;
//         this.width=width;
//     }
// }
//class class delecration method
// const square=class square{
//     constructor(height,width)
//     {
//         this.height=height;
//         this.width=width;
//     }
// }


//like let const class is declaration is nothosited;

class Area{
    //constructor declaration
    constructor(length,width,height)
    {
        this.height=height;
        this.length=length;
        this.width=width;
    }
    //A class have only one constructor;

    // constructor(side1,side2,side3)
    // {
    //     this.side1=side1;
    //     this.side2=side2;
    //     this.side3=side3;
    // }
    //method declaration 
    AreaRect()
    {
        return this.length*this.width;
    }
    AreaSq()
    {
        if(this.length==null)
        {
            return this.width*this.width;
        }else{
            return this.length*this.length;
        }
    }
    AreaTr()
    {
        var s=(this.length +this.width+this.height)/2;
        return Math.sqrt(s*((s-this.length)*(s-this.width)*(s-this.height)));
    }
}
//
let obj=new Area(2,3);
console.log(obj.AreaRect());

let obj1=new Area(4);
console.log(obj1.AreaSq());

let obj2=new Area(3,4,5);
console.log(obj2.AreaTr());


