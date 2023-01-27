var div1item=document.getElementById('div1-item');
var btn1=document.getElementById('btn');
//method-1
btn1.addEventListener('click',()=>{
    div1item.innerHTML="Now change the content of the html body section";
});

var div2item=document.getElementById('div2-item');
var btn1=document.getElementById('btn-1');
//method-1
btn1.addEventListener('click',()=>{
    div2item.style.color="red";
    div2item.style.background="green";
});

var div3item=document.getElementById('image-1');
var btn2=document.getElementById('btn-2');
//method-1
btn2.addEventListener('click',()=>{
    div3item.setAttribute("src","./image/backgroundimage1.avif");
    div3item.style.height="300px";
    div3item.style.width="100%";
    div3item.style.objectFit="cover";
});


