let n=5;
 let str="";

for(let i=1;i<=n;i++)
{
    for(let j=1;j<=n-i;j++)
    {
       str+=" ";
    }
    for(let t=1;t<=2*i-1;t++)
    {
        str+=t;
    }
    str+="\n";
}
 console.log(str);
