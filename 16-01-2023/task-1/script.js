//  let firstname=document.getElementById('Fname');
//  let lastname=document.getElementById('Lname');
//  let age=document.getElementById('num');
//  let massage=document.getElementById('mssg');
 let buttn=document.querySelector('#sbmt');
let form=document.querySelector('#formData');
let output=document.getElementById('output');

 buttn.addEventListener('click', (e) => {
      //prevent the form from submitting
     e.preventDefault();
    //  show the form values
     const formData = new FormData(form);
   //   const values = [...formData.entries()];
   //   console.log(values);
      for (const [key, value] of formData) {
          output.textContent+=`${key}: ${value}\n`;
        }
 });