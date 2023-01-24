const btn = document.getElementById("submt");
const parent = document.getElementById("container-1");
let str = "";
btn.addEventListener("click", function pattern() {
  for (let i = 0; i < 9; i++) {
    const element = document.createElement("p");
    if (i == 0 || i == 8) {
      for (let i = 0; i < 5; i++) {
        const span1 = document.createElement("span");
        span1.innerHTML = "*";
        element.appendChild(span1);
        str += "*";
      }
      //parent.appendChild(element);
    } else if (i % 2 != 0) {
      for (let i = 0; i < 5; i++) {
        //element.innerHTML="&nbsp";
        const span1 = document.createElement("span");
        span1.innerHTML = "&nbsp;";
        element.appendChild(span1);
        str += " ";
      }
      //parent.appendChild(element);
    } else {
      for (let i = 0; i < 5; i++) {
        if (i == 0 || i == 4) {
          //element.innerHTML="*";
          const span1 = document.createElement("span");
          span1.innerHTML = "*";
          element.appendChild(span1);
          str += "*";
        } else {
          //element.innerHTML="&nbsp";
          const span1 = document.createElement("span");
          span1.innerHTML = "&nbsp;";
          element.appendChild(span1);
          str += " ";
        }
      }
    }
    parent.appendChild(element);
    str += "\n";
  }
});

// for (let i = 0; i < 9; i++) {
//     const element=document.createElement('p');
//   if (i == 0 || i == 8) {
//     for (let i = 0; i < 5; i++) {
//       element.innerHTML="*";
//       str+="*";
//     }
//   } else if (i % 2 != 0) {
//     for (let i = 0; i < 5; i++) {
//       element.innerHTML="&nbsp";
//       str+=" ";
//     }
//   } else {
//     for (let i = 0; i < 5; i++) {
//       if (i == 0 || i == 4) {
//         element.innerHTML="*";
//         str+="*";
//       } else {
//         element.innerHTML="&nbsp";
//         str+=" ";
//       }
//     }
//   }
//   str+='\n';
// }

// console.log(str);
