

function lights(){
    let text = document.getElementById('kopas');
    let red = Math.floor(Math.random()* 256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random() * 256);
    a = document.getElementById('colorname').innerText = `rgb(${red}, ${blue},${green})`;
    text.style.color = `rgb(${red}, ${blue},${green})`;

}

var x = document.getElementById("myAudio"); 
 
function start() {
  colors = setInterval(lights, 500);
    x.play(); 
     x.loop = true;
}

function stop() {
  clearInterval(colors);
  x.pause(); 
   x.loop = true;
};


