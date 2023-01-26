// const fname=document.getElementById('fname');
// const lname=document.getElementById('lname');
// const email=document.getElementById('email');
// const passw=document.getElementById('passw');

const form=document.getElementById('form');
const btn=document.getElementById('btn');

btn.addEventListener('click',(e)=>{
   e.preventDefault();
   //console.log(e);
   try{
      const form1=new FormData(form);
      const fname=form1.get('fname-1');
      const lname=form1.get('lname-1');
      const email=form1.get('email-1');
      const passw=form1.get('passw-1');
      if(passw.length<10)
      {
         throw new Error("invalid password");
      }else{
         console.log(fname);
         console.log(lname);
         console.log(email);
         console.log(passw);
      }
   }catch(err)
   {
      console.log(err);
      //location.reload();
      return;
   }
})