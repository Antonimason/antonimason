"use strict"
document.querySelector(".icon-menu").addEventListener("click", ()=>{
    document.querySelector(".lista").classList.toggle("show");
});

let seccion1 = document.querySelector("#seccion1");
let seccion2 = document.querySelector("#seccion2");
let seccion3 = document.querySelector("#seccion3");
let seccion4 = document.querySelector("#seccion4");


let secciones = [seccion1,seccion2,seccion3,seccion4];

secciones.forEach(seccion => seccion.addEventListener("click", ()=>{ document.querySelector(".lista").classList.toggle("show"); })); 

ScrollReveal().reveal(".banner", { delay: 500 });
ScrollReveal().reveal(".imagenyo", { delay: 500 });
ScrollReveal().reveal(".yo", { delay: 1000 });
ScrollReveal().reveal(".about-contenedor", { delay: 500 });
ScrollReveal().reveal(".tema", { delay: 500 });
ScrollReveal().reveal(".estudios", { delay: 1500 });
