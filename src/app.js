import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palo = ['♠️', '♣️', '♥️', '♦️'];
let valor = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '♔', '♕', '♖', '🅰'];

window.onload = function() {
  function obtenerNumeroAleatorio(max){
    return Math.floor(Math.random() * max);
  }
  function obtenerElementos(){
    let texto = `${palo[obtenerNumeroAleatorio (palo.length)]}`
    let num = `${valor[obtenerNumeroAleatorio (valor.length)]}`;
    document.getElementById("carta-superior").innerHTML = texto;
    document.getElementById("carta-inferior").innerHTML = texto;
    document.getElementById("carta-media").innerHTML = num;
    

  }
 obtenerElementos()
}

const reload = document.getElementById("reload");

reload.addEventListener("click", (_) => {
  location.reload();
});