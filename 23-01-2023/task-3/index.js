//var num1 = prompt("Enter the num1");
//var num2 = prompt("Enter the num2");
//console function use to print the element in browser
// for (var a = num1; a <= num2; a++) {
//   if (a % 2 != 0) {
//     console.log(a);
//   }
// }

//document.write method to print
// for (var a = num1; a*a <= num2; a++) {
//   if (a % != 0) {
//     document.write(a, " ");
//   }
// }

//document.getElementByid method to print the element

function isprime(n)
{
    if(n==0 || n==2)
    {
        return false;
    }
    for(var i=2;i<n;i++)
    {
        if(n%i==0)
        {
            return false;
        }
    }
    return true;
}
var button=document.getElementById('btn-1');
/*addEventListener is used*/
button.addEventListener('click',(e)=>
{
    e.preventDefault();
    var input1=document.getElementById('input-1').value;
    for(var i=1;i<=input1;i++)
    {
        if(isprime(i))
        {
            var element=document.createElement('span');
            element.innerHTML=i+" ";
            var parent=document.getElementById('demo');
            parent.appendChild(element);
        }
    }
})
