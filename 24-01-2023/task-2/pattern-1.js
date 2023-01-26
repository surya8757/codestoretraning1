try{
  
let str="";
for (let i = 0; i < 9; i++) {
 if (i == 0 || i == 8) {
   for (let i = 0; i < 5; i++) {
     str+="*";
   }
   str+='\n';
 } else if (i % 2 != 0) {
   for (let i = 0; i < 5; i++) {
     str+=" ";
   }
   str+='\n';
 } else {
   for (let i = 0; i < 5; i++) {
     if (i == 0 || i == 4) {
       str+="*";
     } else {
       str+=" ";
     }
   }
   str+='\n';
 }
}
if(str.length==0)
{
  throw new Error("something went wrong in code");
}
}catch(err){
  console.log(err);
}finally{
  console.log('successfully print the pattern');
}