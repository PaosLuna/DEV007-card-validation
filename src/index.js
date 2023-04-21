//CODIGO CLONADO
import validator from './validator.js';
console.log(validator);

//TRAER NÚMERO DE LA TARJETA
const numeroCard = document.querySelector(".numero_falso");
const numeroInput = document.querySelector("#tarjeta-cliente");
const errorCard = document.querySelector(".error");
const comprar = document.getElementById("comprar");

//GUARDAR EL NÚMERO DE TARJETA Y CONVERTIR EN ARRAY
comprar.addEventListener("click", () => {
  const tarjetaCliente = document.getElementById("tarjeta-cliente").value;
  
  //LLAMAR DE VALIDATOR PARA ENMASCARAR 
  const enmascarar = validator.maskify(tarjetaCliente)
  console.log(enmascarar);

  //LLAMAR DE VALIDATOR PARA QUE DIGA SI ES VALIDA O NO   
  const resultado = validator.isValid(tarjetaCliente);    
  if (resultado === true){
    console.log("Tu tarjeta es valida");
  } else if (resultado === false) {
    console.log("Tu tarjeta es invalida");
  }
});




//SIRVEN PARA LLENAR LA TARJETA DIGITAL 

//LLENAR NÚMERO EN TARJETA DIGITAL
numeroInput.addEventListener('input', event => {
  const inputValue = event.target.value;
  const regExp = /[A-z]/g; //MARCA ERROR SI SALE LETRA

  if (regExp.test(numeroInput.value) === true) {
    errorCard.innerText = "Sólo números";
  } else {//QUITA Y PONE ESPACIOS 
    numeroInput.value = inputValue.replace(/\s/g, '').trim()
    // replace(/([0-9]{4})/g, '$1 ')
    errorCard.innerText = '';
  }

  if (numeroInput.value === '') { //DUPLICAR NÚMERO EN TARJETA DIGITAL
    numeroCard.innerText = "0000 0000 0000 0000"
  } else {
    numeroCard.innerText = numeroInput.value;
  }
});

//TRAER NOMBRE DE LA TARJETA
const nombreCard = document.querySelector(".datos-tarjeta-nombre");
const nombreInput = document.querySelector("#nombre-cliente");

//DUPLICAR NOMBRE EN TARJETA DIGITAL
nombreInput.addEventListener("input", () => {
  if (nombreInput.value === '') {
    nombreCard.innerText = "Nombre de la tarjeta"
  } else {
    nombreCard.innerText = nombreInput.value;
  }
});

//TRAER FECHA DE LA TARJETA
const mesCard = document.querySelector(".datos-tarjeta-mes");
const añoCard = document.querySelector(".datos-tarjeta-año");
const mesInput = document.querySelector("#mes-cliente");
const añoInput = document.querySelector("#año-cliente");

//DUPLICAR MES EN TARJETA DIGITAL
mesInput.addEventListener('input', () => {
  if (mesInput.value === '') {
    mesCard.innerText = "MM"
  } else {
    mesCard.innerText = mesInput.value
  }
});

//DUPLICAR AÑO EN TARJETA DIGITAL
añoInput.addEventListener('input', () => {
  if (añoInput.value === '') {
    añoCard.innerText = "YY"
  } else {
    añoCard.innerText = añoInput.value
  }

});
