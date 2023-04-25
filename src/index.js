import validator from './validator.js';
console.log(validator);

//TRAER NÚMERO DE LA TARJETA
const numeroCard = document.querySelector(".numero_falso");
const numeroInput = document.querySelector("#tarjeta-cliente");
//const errorCard = document.querySelector(".error");
const comprar = document.getElementById("comprar");

//LOGOS DEL BANCO
const logoVisa = document.getElementById("logo-visa");
const logoMaster = document.getElementById("logo-master");
const logoAmerican = document.getElementById("logo-american");

logoVisa.style.display = 'none';
logoMaster.style.display = 'none';
logoAmerican.style.display = 'none';

//QUÉ SUCEDE AL INGRESAR EL NÚMERO EN EL INPUT
numeroInput.addEventListener('input', event => {
  const inputValue = event.target.value;
  //const regExp = /[A-z]/g; //MARCA ERROR SI SALE LETRA
  numeroInput.value = inputValue.replace(/\s/g, '').replace(/\D/g, '').trim() //NO DEJA INGRESAR LETRAS NI ESPACIOS

  /*if (regExp.test(numeroInput.value) === true) {
    errorCard.innerText = "Ingresa sólo números";
  } else {
    errorCard.innerText = '';
  }*/

  //LLENAR Y ENMASCARAR TARJETA DIGITAL
  if (numeroInput.value === '') { //DUPLICAR NÚMERO EN TARJETA DIGITAL
    numeroCard.innerText = "0000 0000 0000 0000"
  } else {
    numeroCard.innerText = numeroInput.value.slice(0, -4).replace(/./g, "#") + numeroInput.value.slice(-4); //MUESTRA LA MÁSCARA EN LA TD
  }
  console.log(inputValue);
  
  //CONOCER EL BANCO DE LA TARJETA  
  const numero = inputValue.slice(0, 2);
  console.log(numero);
  if (numero === "40"){
    //console.log("VISA");
    visa();
  } if (numero === "34" || numero === "37") {
    //console.log("AMERICAN EXPRESS"); 
    master();
  } if (numero === "51" || numero === "55") {
    //console.log("MASTER CARD");
    american();
  } 
});

//MOSTRAR LOGO BANCO
function visa(){
  logoVisa.style.display = 'block';
}

function master(){
  logoMaster.style.display = 'block';
}

function american(){
  logoAmerican.style.display = 'block';
}





//QUÉ SUCEDE AL DAR CLICK EN COMPRAR
comprar.addEventListener("click", () => {
  const tarjetaCliente = document.getElementById("tarjeta-cliente").value;
  
  //LLAMAR DE VALIDATOR PARA ENMASCARAR 
  const enmascarar = validator.maskify(tarjetaCliente);
  console.log(enmascarar);

  //LLAMAR DE VALIDATOR PARA QUE DIGA SI ES VALIDA O NO   
  const resultado = validator.isValid(tarjetaCliente);
  if (resultado === true) {
    //ABRIR POP UP
    abrirPopUp();
    //alert("Tu tarjeta es valida");
  } else if (resultado === false) {
    abrirPopUpError();
    //alert("Tu tarjeta es invalida");
  }
});

//POP UP VALIDO
const cerrarPopUp = document.querySelector('#btn-cerrar-popUp');
const popUp = document.querySelector('#popUp');

function abrirPopUp(){
  popUp.showModal();
}

cerrarPopUp.addEventListener("click", () => {
  popUp.close();
})

//POP UP INVALIDO
const cerrarPopUpError = document.querySelector('#btn-cerrar-popUpError');
const popUpError = document.querySelector('#popUpError');

function abrirPopUpError(){
  popUpError.showModal();
}

cerrarPopUpError.addEventListener("click", () => {
  popUpError.close();
})



//EN ADELANTE TODO ES ÚNICAMENTE PARA CLONAR LA INFO EN LA TARJETA DIGITAL 


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
mesInput.addEventListener('input', event => {
  const mesValue = event.target.value;
  mesInput.value = mesValue.replace(/\s/g, '').replace(/\D/g, '') 
  if (mesInput.value === '') {
    mesCard.innerText = "MM"
  } else {
    mesCard.innerText = mesInput.value
  }
});

//DUPLICAR AÑO EN TARJETA DIGITAL
añoInput.addEventListener('input', event => {
  const añoValue = event.target.value;
  añoInput.value = añoValue.replace(/\s/g, '').replace(/\D/g, '')

  if (añoInput.value === '') {
    añoCard.innerText = "YY"
  } else {
    añoCard.innerText = añoInput.value
  }
});

/*/CONOCER EL BANCO DE LA TARJETA 
const bancos = [
  {nombre: "VISA" , numero: "1234"},
  {nombre: "MASTERCARD" , numero: "5678"},
  {nombre: "AMERICANEXPRESS" , numero: "9012"}
];



//SACAR LOGO BANCO
const logoBanco = document.getElementById('logo-banco');
logoBanco.innerHTML = '';
    const imagen = document.createElement('img');
    imagen.src = "images\VISA.png";
    logoBanco.appendChild(imagen);*/

