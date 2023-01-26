try{
    console.log('start of try');
    nums1;
    console.log('End of try')
}catch(error)
{
    console.log(error);
 }
// output if 2line but after error line is move to the catch() console
// here 4th line is not printed;
// it give reference error because of  nums1 is not defined;


try{
    setTimeout(function(){
        num3;
    },1)
}catch(error)
{
    console.log('error is occurs');
}
//in line number 20 cann't show error because of setTimeout
//use try catch inside the setTimeout function;
setTimeout(function()
{
    try{
        num2;

    }catch(error)
    {
        console.log('Error has occurred');
    }
},1000);

try{
    num4;
}catch(error)
{
    //error name show error name
    console.log(error.name);
    //message show only error message
    console.log(error.message);
    //stack show both name and message
    console.log(error.stack);
}


//reference Error
//1>undefined vaiables
try{
    let firstName="surya";
    let age=22;
    //because lastName is not defined;
    //This is also refference error
    console.log(lastName);
}catch(err){
    console.log(ReferenceError(err));
}

//2>scope error
{
    let nums=10;
}
console.log(nums);

//3>Redeclarations referenceError
function redeclarations()
{
    let declare=1;
    if(true)
    {
        let declare=(declare+1);
    }
    console.log(declare);
}
redeclarations();



//syntaxError

try{
    if(numsber=200);
}catch(err)
{
    console.log(err.message);
}

//typeError
//int a=10;syntaxError
console.log(a);

try{
    nums1;
}catch(error)
{
    if(error instanceof ReferenceError)
    {
        console.log('Reference Error')
    }else if(error instanceof TypeError)
    {
        console.log('TypeError')
    }else{
        console.log('unkknow Error');
    }
}

//throw is used to throw custimized message;


 try{
     let json='{"name":"surya","age":30}';
     let user=JSON.parse(json);
     if(!user.name)
     {
         throw new Error("Incomplete data");
     }
     console.log(user.name);
     console.log(user.age);
 }catch(err)
 {
     console.log(err);
 }finally{
    console.log('Finally');
 }

 //finally run in all case;

 let form=document.getElementById("form-1");
 let btn=document.getElementById("bt-1");
 btn.addEventListener('click',()=>
 {
    try{
    let form=new FormData(from);
    if(form.length==0)
    {
        throw new Error('data empty');
    }else{
        console.log(form.get(Email1));
        console.log(form.get(password));
    }
}catch(err){
    console.log(err);
    }
 })

 