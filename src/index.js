//CODIGO CLONADO
import validator from './validator.js';
console.log(validator);

//TRAER NOMBRE DE LA TARJETA
let nombreCard = document.querySelector(".datos-tarjeta-nombre");
let nombreInput = document.querySelector("#nombre-cliente");

//DUPLICAR NOMBRE EN TARJETA DIGITAL
nombreInput.addEventListener("input", ()=>{
    if(nombreInput.value == ''){
        nombreCard.innerText = "Nombre de la tarjeta"
    }else{
    nombreCard.innerText = nombreInput.value;
    }
});


//TRAER NÚMERO DE LA TARJETA
let numeroCard = document.querySelector(".numero_falso");
let numeroInput = document.querySelector("#tarjeta-cliente");
let errorCard = document.querySelector(".error");


//NÚMERO DE TARJETA 
numeroInput.addEventListener('input', event=>{
    event.preventDefault()

var numero = document.getElementById("#tarjeta-cliente");
var numeroCuenta = parseInt(numero);
    
console.log(typeof numero);
console.log(typeof numeroCuenta);

console.log(numero);
console.log(numeroCuenta);

    let inputValue = event.target.value;

    let regExp = /[A-z]/g; //MARCA ERROR SI SALE LETRA
    if(regExp.test(numeroInput.value) == true){
        errorCard.innerText = "Sólo números";
    }else{//QUITA Y PONE ESPACIOS 
        numeroInput.value = inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g, '$1 ').trim()
        errorCard.innerText = '';
    }  
    
    if(numeroInput.value == ''){ //DUPLICAR NÚMERO EN TARJETA DIGITAL
        numeroCard.innerText = "0000 0000 0000 0000"
     }else{
         numeroCard.innerText = numeroInput.value;
     }
});


//TRAER FECHA DE LA TARJETA
let mesCard = document.querySelector(".datos-tarjeta-mes");
let añoCard = document.querySelector(".datos-tarjeta-año");
let mesInput = document.querySelector("#mes-cliente");
let añoInput = document.querySelector("#año-cliente");

//DUPLICAR MES EN TARJETA DIGITAL
mesInput.addEventListener('input', ()=>{
    if(mesInput.value == ''){
        mesCard.innerText = "MM"
    }else{
        mesCard.innerText = mesInput.value
    }
});

//DUPLICAR AÑO EN TARJETA DIGITAL
añoInput.addEventListener('input', ()=>{
    if(añoInput.value == ''){
        añoCard.innerText = "YY"
    }else{
        añoCard.innerText = añoInput.value
    }

});




//GUARDAR EL NÚMERO DE TARJETA EN LS
//function infoCliente() {
//    let tarjetaCliente = document.getElementById("tarjeta-cliente");
//    localStorage.setItem("cardCliente", tarjetaCliente.value);
//    console.log(localStorage.getItem("cardCliente"));
//}

//CONVERTIR A UN ARRAY
//function convertir() {
//    var numero = document.getElementById(".tarjeta-cliente");
//    var numeroCuenta = parseInt(numero);
    
//    console.log(numero);
//    console.log(numeroCuenta);
//}


//INTENTO PARA QUITAR ESPACIOS
//tarjeta-cliente.addEventListener("keyup",e=>{
//    let string = e.target.value
//    e.target.value = string.trim( );
//});

//INTENTO PARA OCULTAR LOS DIGITOS TARJETA
//document.getElementById("comprar").addEventListener("click", function(e) {
//    var creditCard = document.getElementById("tarjeta-cliente").value;
//    if (creditCard.match("^[0-9]{16}")) {
//      alert("Cumple el patron");
//    } else {    
//      alert("No cumple el patron");
//      e.preventDefault(); // no se envia el formulario
//    }
//  });