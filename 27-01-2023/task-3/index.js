

function changeImage() {
    var btn=document.getElementById('btn');
    var img = document.getElementById('img-off');
    if (img.src.match("bulb-off")) {
        btn.innerHTML="ON";
        btn.style.color="black";
        btn.style.backgroundColor="yellow";
      img.setAttribute('src' , "./image/bulb-on.png");
    } else {
        btn.innerHTML="OFF";
        btn.style.color="white"
        btn.style.backgroundColor="gray"
      img.src = "./image/bulb-off.png";
    }
  }