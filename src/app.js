import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palo = ['spade', 'picas', 'heart', 'diamond'];
let valor = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'rey', 'reina', 'jota', 'as'];

window.onload = function() {
  function obtenerNumeroAleatorio(max){
    return Math.floor(Math.random() * max);
  }
  function obtenerElementos(){
    let carta = `${palo[obtenerNumeroAleatorio (palo.length)]}` + " " + `${valor[obtenerNumeroAleatorio (valor.length)]}`
    document.getElementById("carta").innerHTML = carta;
  }
 obtenerElementos()
}

const reload = document.getElementById("reload");

reload.addEventListener("click", (_) => {
  location.reload();
});