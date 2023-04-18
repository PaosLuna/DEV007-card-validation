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



//GUARDAR EL NÚMERO DE TARJETA Y CONVERTIR EN ARRAY
    numeroInput.addEventListener("input", event=>{
    let tarjetaCliente = document.getElementById("tarjeta-cliente").value;
    validator.isValid(tarjetaCliente); //VIENE DE VALIDATOR.JS
});



//NÚMERO DE TARJETA 
numeroInput.addEventListener('input', event=>{
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







//function infoCliente() {
//    let tarjetaCliente = document.getElementById("tarjeta-cliente");
//    localStorage.setItem("cardCliente", tarjetaCliente.value);
//    console.log(localStorage.getItem("cardCliente"));
//}


