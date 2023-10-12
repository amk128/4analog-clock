let sec = document.querySelector('.sec');
let min = document.querySelector('.min');

let deg = 6;
sec.style.transform = "rotateZ(deg)";

setInterval(handler , 1000);

function handler(){
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    
    sec.style.transform = `rotateZ(${s*6}deg)`;
    min.style.transform = `rotateZ(${m*6}deg)`;
    
}