const validator = {
  isValid:function(cadena){
    const cardCliente = cadena.split(""); //convertir en array
    const reversaCard = cardCliente.reverse(); //invertir 
    console.log(reversaCard);

    for (let i=0; i<reversaCard.length; i++){
      if (i%2 !== 0){ // busca los indices de posicion par
        reversaCard[i] = reversaCard[i] * 2; // multiplica los pares x2
      }
      if (reversaCard[i] > 9){ //ve si el índice es mayor a 9
        reversaCard[i] = parseInt(String(reversaCard[i]).charAt(0)) + parseInt(String(reversaCard[i]).charAt(1)) //suma los 2 digitos
        console.log(reversaCard);
      }
    } 

    let sumar = 0; //declaramos la suma para empezar en 0
      
    for (let i=0; i<reversaCard.length; i++) {
      sumar += parseInt(reversaCard[i]); //suma todos los digitos
      console.log(sumar);
    }
    
    const sumar2 = sumar * 9 % 10; //se mutiplica y divide 
    console.log(sumar2);

    if (sumar2 === 0){ //condicional para ver si es valida
      //alert("Tu tarjeta es valida")
      return true
    }else{
      //alert("Tu tarjeta es invalida")
      return false
    }      
  },

  maskify:function(cardCliente){
    
    const enmascarar = cardCliente.length -4;
    for (let i = 0; i <enmascarar.length; i++) {
      cardCliente[i] = '#';
      return enmascarar
    }
  }
}

export default validator;

