//CODIGO CLONADO
import validator from './validator.js';
console.log(validator);

//TRAER NÚMERO DE LA TARJETA
let numeroCard = document.querySelector(".numero_falso");
let numeroInput = document.querySelector("#tarjeta-cliente");
let errorCard = document.querySelector(".error");
let comprar = document.getElementById("comprar");

//GUARDAR EL NÚMERO DE TARJETA Y CONVERTIR EN ARRAY
    comprar.addEventListener("click", event=>{
    let tarjetaCliente = document.getElementById("tarjeta-cliente").value;
    validator.isValid(tarjetaCliente); //VIENE DE VALIDATOR.JS
      
  //LLAMAR DE VALIDATOR PARA QUE DIGA SI ES VALIDA O NO   
  //  function algoritmoLuhn(){
  //      validator.isValid(cadena); 
  //  if (sumar == true){
  //          console.log("Tu tarjeta es valida");
  //      } else if (sumar == false) {
  //         console.log("Tu tarjeta es invalida");
  //        }
  //      }

});





//comprar.addEventListener("click", algoritmoLuhn);





//LLENAR NÚMERO EN TARJETA DIGITAL
numeroInput.addEventListener('input', event=>{
    let inputValue = event.target.value;
    let regExp = /[A-z]/g; //MARCA ERROR SI SALE LETRA
    
    if(regExp.test(numeroInput.value) == true){
            errorCard.innerText = "Sólo números";
        }else{//QUITA Y PONE ESPACIOS 
           numeroInput.value = inputValue.replace(/\s/g, '').trim()
          // replace(/([0-9]{4})/g, '$1 ')
           errorCard.innerText = '';
    }  
    
    if(numeroInput.value == ''){ //DUPLICAR NÚMERO EN TARJETA DIGITAL
        numeroCard.innerText = "0000 0000 0000 0000"
     }else{
         numeroCard.innerText = numeroInput.value;
     }
});













//SOLO SIRVE PARA LLENAR LA TARJETA DIGITAL 


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
