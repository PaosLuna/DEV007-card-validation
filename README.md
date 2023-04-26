# Tarjeta de crédito válida

## Índice

* [1. Producto](#1-producto)
* [2. Diseño UX](#2-diseño-ux)
* [3. Paramore web](#3-paramore-web)
* [4. Flujo de trabajo](#4-flujo-de-trabajo)
* [5. Fuentes consultadas](#5-fuentes-consultadas)

***

## 1. Producto

Se diseñó una página web para poder acceder a la Preventa Exclusiva para Fans de la banda norteaméricana **Paramore**, quienes podrán adquirir antes que el público
general boletos para sus presentaciones en México, las cuales se realizarán en 3 ciudades del país durante agosto de 2023. 

Con una interfaz sencilla y clara, desarrollada en 3 pantallas diferentes, el usuario podrá acceder facilmente y seleccionar alguna de las 3 fechas para posteriormente
ingresar su información bancaria en un formulario que le permitirá comprobar la validez de su tarjeta bancaria a través del algoritmo de Luhn. 

Si los datos de su tarjeta son correctos la página mostrará un mensaje informando que la compra ha sido realizada, en caso contrario se informará que los datos no son
validos y se solicitará que vuelva a ingresarlos. 

![Poster promocional](https://github.com/PaosLuna/DEV007-card-validation/blob/c01aedd7f3f10e3ae090f02e531bd8bfc98b8b9a/src/images/POSTER-PARAMORE.jpg)

## 2. Diseño UX

### Target

La página está totalmente enfocada a los fans de **Paramore**, quienes a través de esta tendrán acceso previo a la venta de boletos para sus presentaciones en México.

### Diseño

El diseño esta basado en los colores **FireBrick** y **Linen** , protagonistas de la nueva era de **Paramore**, la cual dio inicio en febrero de 2023 con el estreno de
su nuevo disco **This is why**. Así mismo, el diseño minimalista encaja con una agrupación más madura, dejando de lado la etapa colorida que los distinguió en su era
pasada.

Finalmente, la imagen de fondo se trata de la foto con la que **Paramore** volvío a las redes después de 5 años de ausencia. 

### Prototipo

Este fue el prototipo inicial de la página, por lo que se logró ejecutar.

![Prototipo](https://github.com/PaosLuna/DEV007-card-validation/blob/b4ff0ec41d6a14a3e46ab0fa21fc331a3d2cbf67/src/images/prototipo.jpg)

## 3. Paramore web

* Página 1

En la primer pantalla se muestra el mensaje de bienvenida informando que se trata de la página donde se realizará la venta exclusiva para fans; el botón de "COMPRAR" 
enviará a la siguiente pantalla.


![Página1](https://github.com/PaosLuna/DEV007-card-validation/blob/7cd2400f055a53794c5c5e29233a06e8a0dd7444/src/images/Pagina1.jpeg)

* Página 2
 
 En la segunda pantalla se muestran las 3 fechas disponibles en México, cada fecha tiene su propio botón de "COMPRAR"; sin embargo, por tiempo, todas redirigirán a 
 comprar boletos para la fecha en CDMX ya que no se crearon las otras dos.
 
 
![Página2](https://github.com/PaosLuna/DEV007-card-validation/blob/7cd2400f055a53794c5c5e29233a06e8a0dd7444/src/images/Pagina2.jpeg)

* Página 3

Finalmente, en la tercer pantalla se muestra el título indicando el recinto y fecha seleccionada para comprar. Enseguida se encuentra un formulario para llenar con los
datos de la tarjeta del usuario; del lado derecho una tarjeta digital que se va llenando al tiempo que se ingresa la información en el formulario. 

Las secciones "Número de tarjeta" y "Fecha de vencimiento" sólo reciben números, no permite ingresar letras, simbolos ni espacios. 

Así mismo, cuando se ingresan los primeros 2 números en la sección "Número de tarjeta" se identifica a qué banco pertenece y coloca el logo del banco correspondiente 
en la tarjeta digital. 

![Página3](https://github.com/PaosLuna/DEV007-card-validation/blob/7cd2400f055a53794c5c5e29233a06e8a0dd7444/src/images/Pagina3.jpeg)

* Tarjeta valida

Una vez ingresados los datos, el botón "COMPRAR" ejecutará las funciones que enmascararán y validarán el número de tarjeta ingresado. De ser un número valido arrojará el siguiente mensaje:

![TarjetaValida](https://github.com/PaosLuna/DEV007-card-validation/blob/7cd2400f055a53794c5c5e29233a06e8a0dd7444/src/images/TarjetaValida.jpeg)

* Tarjeta invalida

Por otro lado, si el número de tarjeta ingresado no es valido arrojará el siguiente mensaje: 

![TarjetaInvalida](https://github.com/PaosLuna/DEV007-card-validation/blob/7cd2400f055a53794c5c5e29233a06e8a0dd7444/src/images/TarjetaInvalida.jpeg)

* Tests

Los tests que ya venian prediseñados desde el boilerplate fueron pasados exitosamente. 

![Tests](https://github.com/PaosLuna/DEV007-card-validation/blob/467c5251f708c9fbf4b85144a9aea01544e67cf5/src/images/Tests.jpeg)

## 4. Flujo de trabajo 

El tiempo para desarrollar este proyecto fue de 3 strings, durante esos strings seguí el siguiente flujo de trabajo:

**String 1. Planeación general 

* Leer y entender qué slicitaba el proyecto
* Dedicar un día para descargar, instalar y entender los diferentes programas que se requieren para el proyecto, también se clonó el boilerplate
* Iniciar a dar estructura, se crearon las 3 páginas HTML
* Solicité mi primer OH en compañía de mis compañeras de squad, para resolver una duda sobre la terminal 
* Inicar a dar estilo en css, la decisión de comenzar por HTML y css fue que me parece bastante más sencillo de manejar y me sentía motivada al ver
  algo ya plasmado

**String 2. Comenzar lógica

* El proposito fue lograr desarrollar las funciones isValid y Maskify en el segundo string, pero antes se diseñaron diversas funciones para hacer interactiva la página
* Aquí comenzaron los bloqueos y mucho tiempo dedicado a leer, estudiar y entender las diversas funciones de Javascript
* En este string pude darle interacción total a mi página, inputs funcionales y restricciones en el formulario 
* Diseñé y di funcionalidad a la tarjeta digital 
* Comencé a desarrollar isValida
* Arreglé detalles de css

**String 3. Culminar proyecto 

* Solicité mi segunda OH, donde se me ayudó a un bloqueo que tenia con la función isValid 
* Logré terminar mi función isValid, corrí los tets y pasaron sin problema 
* En este punto ya tenía mis conocimientos más desarrollados y logré terminar maskify el mismo día que isValid
* Decidí que quería realizar la función para reconocer el banco al que pertenece la tarjeta
* Solicité mi tercera OH para aclarar varias dudas respecto a la función de reconocer el banco y sobre cómo ocultar y mostrar información 
* Logré terminar la función para identificar el banco 
* Creé e hice funcionales las ventanas modal que muestran si la tarjeta es valida o no
* Logré que el logo del banco apareciera en la tarjeta al identificar los primeros digitos
* Arreglé estilo en css
* Redacte el Readme

![Gracias](https://github.com/PaosLuna/DEV007-card-validation/blob/517b7ff0f3f5b8d8ceb6eb5d941bcc16b104b93d/src/images/muchas-gracias-gato.jpg)


## 5. Fuentes consultadas

A continuación algunos de los muchos artículos, videos y páginas consultadas para lograr desarrollar este proyecto:

*https://www.aulaclic.es/articulos/html5-semantica_2.html
*https://www.youtube.com/watch?v=slpHkNSCVv0&ab_channel=SergioDevWeb
*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_text
*https://developer.mozilla.org/es/docs/Learn/Forms/Styling_web_forms
*https://www.acontracorrientech.com/metodos-comunes-de-los-arrays-guia-practica/
*https://www.htmlquick.com/es/reference/tags/form.html#attributes
*https://www.um.es/docencia/barzana/DAWEB/Formularios-HTML5.html#:~:text=El%20atributo%20action%20indica%20la,de%20test%20en%20el%20formulario
*https://www.freecodecamp.org/espanol/news/javascript-string-replace-ejemplos-con-expresiones-regulares/
*https://tuwebcreativa.com/centrar-imagen-css/
*https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html
*https://www.w3schools.com/howto/howto_css_modals.asp
*https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog
*https://norfipc.com/inf/javascript-como-ocultar-mostrar-elementos-paginas-web.html
*https://www.w3schools.com/css/css_display_visibility.asp#:~:text=display%3A%20none%3B%20is%20commonly%20used,without%20deleting%20and%20recreating%20them
*https://cybmeta.com/display-none-vs-visibility-hidden-y-tu-como-escondes-las-cosas#:~:text=El%20valor%20display%3A%20none%20le,el%20navegador%20representa%20la%20caja
*http://www.codexexempla.org/curso/curso_4_3_d.php
*https://www.freecodecamp.org/espanol/news/subir-a-github-lo-suficientemente-simple-para-poetas/
*https://pandao.github.io/editor.md/en.html#Editor.md
*https://regexr.com/ 
*https://www.w3schools.com/jsref/event_onkeypress.asp
*https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration
*https://programacion.net/articulo/como_crear_un_formulario_de_validacion_de_tarjetas_de_credito_sencillo_1651
*https://www.codewars.com/kata/5715eaedb436cf5606000381

