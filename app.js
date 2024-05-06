document.getElementById("boton_exercise1");
document.getElementById("boton_exercise2");
function mostrarImagen() {
  document.getElementById('modalImagen').style.display = "block";
  document.getElementById("imagenModal").src = "mys-captures/ejercicio-2_resultado-codigo.png";
}
function cerrarModal() {
  document.getElementById('modalImagen').style.display = "none";
}


boton_exercise1.addEventListener("click", function(){

  alert("¡Bienvenido usuario cibernetico!")

  let respuestaGlobal = prompt("¿Crees que es posible acceder a la variable globalVariable en cualquier parte del código? ¿Por qué?")
  let respuestaFuncion = prompt("¿Crees que es posible acceder a la variable functionVariable fuera de la función testScope()? ¿Por qué?")
  let respuestaBloque = prompt("¿Crees que es posible acceder a la variable blockVariable fuera del bloque if dentro de la función testScope()?¿Por  qué?")

  let resultadoGlobal = (respuestaGlobal.toLowerCase() === "sí") ? "Correcto" : "Incorrecto"
  let resultadoFuncion = (respuestaFuncion.toLowerCase() === "no") ? "Correcto" : "Incorrecto"
  let resultadoBloque = (respuestaBloque.toLowerCase() === "no") ? "Correcto" : "Incorrecto"
  let explicacionGlobal = "La variable 'globalVariable' puede ser accedida desde cualquier parte del codigo ya que esta definida en el ambitoglobal"
  let explicacionFuncion = "La variable 'functionVariable' solo puede ser accedida dentro de la función porque esta definida en el ambito   deesa funcion"
  let explicacionBloque = "La variable 'blockVariable' solo puede ser accedida dentro del bloque if donde esta definida, fuera de ese bloque noes posible acceder a ella debido a que está definida con let y tiene un ambito de bloque"

  alert("Resultado 'globalVariable': " + resultadoGlobal + "\n" + explicacionGlobal + "\n\n" + "Resultado 'functionVariable': " +resultadoFuncion + "\n" + explicacionFuncion + "\n\n" + "Resultado 'blockVariable': " + resultadoBloque + "\n" + explicacionBloque)
})

// Pide al usuario predecir el resultado de cada operación y luego muestra el resultado real para explicar el comportamiento del hoisting. Recuerda que todas las variables y funciones son hoisted, pero con comportamientos diferentes. Por ejemplo, las variables declaradas con var son inicializadas con undefined, mientras que las variables con let y const no pueden ser accedidas antes de su declaración. Con respecto a las funciones, estas son inicializadas con su definición completa, por lo que pueden ser llamadas antes de su declaración.

boton_exercise2.addEventListener("click", function(){
  // Preguntas al usuario
  prompt("¿Qué crees que sucederá con la variable 'a' declarada con var?");
  prompt("¿Qué crees que sucederá con la variable 'b' declarada con let?");
  prompt("¿Qué crees que sucederá con la variable 'c' declarada con const?");
  alert("Ahora con las funciones Usuario!");
  prompt("¿Qué crees que sucederá con la función 'funcionDeclarada'?");
  prompt("¿Qué crees que sucederá con la función 'funcionExpresada'?");
  //fin de las preguntas
  alert("¡Estuvieron geniales tus respuestas Usuario!");
  alert("El tema es sencillo, 'hoisted' representa lo que sucede si 'subimos' una variable o función a una parte del código en donde aún no está declarada.\n\nLas variables tienen distintas reacciones dependiendo de con qué palabra clave las declares. Por ejemplo, la variable 'a' está declarada con var, y va a inicializarse en 'undefined', mientras que las variables declaradas con let y const no pueden ser accedidas antes de declararlas.");
  alert("Las funciones son diferentes. Por ejemplo, 'funcionDeclarada' es una función declarada, y por ende, puede ser llamada desde cualquier parte del código. En cambio, 'funcionExpresada' muestra un TypeError porque intentamos llamarla antes de su declaración, y las expresiones de funciones no se elevan como lo hacen las declaraciones de funciones.");
  // vars call
  console.log("Valor de a:", a); 
  console.log("Valor de b:", b);
  console.log("Valor de c:", c);

  // functions call
  console.log("Resultado de funcionDeclarada:", funcionDeclarada());
  console.log("Resultado de funcionExpresada:", funcionExpresada());

  // vars declaration
  var a = 1;
  let b = 2;
  const c = 3;

  // functions declarations
  function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
  }

  const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
  };
});

//ejercicio 3 clousures

//creamos la funcion crearSumador( que recibe un numero inicial)
function crearSumador(numInicial) {
  //la funcion retorna otra funcion que recibe otro numero
  return function(num) {
    //y esa otra funcion va a retornar el resultado del numero inicial + el otro numero
      return numInicial + num;
  };
}
//definimos el retorno de la primera funcionn dentroo de una variable para que nos de el retorno, y le ingresamos el parametro
let sumarCinco = crearSumador(8);
//luego hacemos el mismo proceso para la segunda funcion, la definimos como una variable y obtenemos la suma que es su retorno
let resultado = sumarCinco(25);
//imprimmimos el resultado
console.log(`This is the result of the exercise three: ${resultado}`); 

//ejercicio 4

//utilizo el dom para copiar un texto al portapapeles

document.getElementById('botonCopiar').addEventListener('click', function() {
  // Selecciona el elemento que contiene el texto a copiar
  var textoACopiar = document.getElementById('textoCopiar');

  // Crea un campo de texto temporal para copiar el texto
  var campoTemporal = document.createElement('textarea');
  campoTemporal.value = textoACopiar.innerText;
  document.body.appendChild(campoTemporal);

  // Selecciona el texto dentro del campo temporal
  campoTemporal.select();
  campoTemporal.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia el texto seleccionado en el portapapeles
  document.execCommand('copy');

  // Elimina el campo temporal
  document.body.removeChild(campoTemporal);

  // Muestra un mensaje de éxito (opcional)
  alert('Texto copiado al portapapeles: ' + textoACopiar.innerText);
});

//ejercicio 5

//primero definimos la funcion que recibira el callback y la promesa
function manejarAsincronia(callback, promise) {
  //luego aplicamos la promesa con el constructor new promise, el cual recibe resolve y reject para manejar el exito o el rechazo de la operacion 
  const miPromesa = new Promise((resolve, reject) => {
    //aplicamos un settimeout para que la operacion se ejecute despues de 2 segundos, se ejecutara reject (error) pero tambien podemos poner resolve (exito)
      setTimeout(() => {
          reject();
      }, 2000);
  });
  //ejecutamos el callback dependiendo si fue exito o rechazo, dentro de los then y catch 
  miPromesa
      .then(() => {
          callback("¡Promesa cumplida!");
      })
      .catch(() => {
          callback("¡Promesa rechazada!");
      });
}

// llamamos a la funcion por ultimo
manejarAsincronia((mensaje) => {
  console.log(mensaje);
});

// ejercicio 6

// Implementación del Script: - Inicia tu script mostrando un mensaje en consola que diga "Mensaje 1: Inmediatamente". - Luego, utiliza setTimeout() con un retardo de 0 segundos para mostrar "Mensaje 2: Con timeout de 0 segundos". - Finalmente, configura otro setTimeout() con un retardo de 1 segundo para mostrar "Mensaje 3: Con timeout de 1 segundo". Ejecución y Observación: - Ejecuta el script en tu entorno de desarrollo o en la consola del navegador. - Observa el orden en el que aparecen los mensajes y toma nota.

console.log("Mensaje 1: Inmediatamente...")

setTimeout(() => {
  console.log("Mensaje 2: Con TimeOut de 0 segundos...")
}, 0)

setTimeout(() =>{
  console.log("Mensaje 3: Con TimeOut de 1 segundo...")
}, 1000)

//ejercicio 7

boton_exercise7.addEventListener("click", function(){
  let respuestaUsuario = Number(prompt("Tienes 3 opciones, solo una es la correcta 🤑\n\n1:\nInicio del script\nFin del script\nPromesa resuelta\nPrimer setTimeOut\nSegundo setTimeOut\n\n2:\nFin del script\nInicio del script\nPrimer setTimeOut\nPromesa resuelta\nSegundo setTimeOut\n\n3:\nInicio del script\nPromesa resuelta\nSegundo setTimeOut\nFin del script\nPrimer setTimeOut"))
  let respuestaCorrecta = "\nInicio del script\nFin del script\nPromesa resuelta\nPrimer setTimeOut\nSegundo setTimeOut"

    switch(respuestaUsuario){
      case 1:
        alert("¡Felicitaciones usuario! usted se ha convertido en senior JS")
        console.log(`La respuesta correcta es: ${respuestaCorrecta}`)
        break

      case 2:
        alert("¡Lo pudimos haber hecho mejor Usuario! vuelve a repasar...")
        console.log(`La respuesta correcta es: ${respuestaCorrecta}`)
        break

      case 3:
        alert("¡Lo pudimos haber hecho mejor Usuario! vuelve a repasar...")
        console.log(`La respuesta correcta es: ${respuestaCorrecta}`)
        break

      default:
        alert("Ingresa una opcion valida Usuario...")  
    }
})

//ejercicio 8

boton_exercise8.addEventListener("click", function(){
  //creamos la funcion principal
  function crearContador() {
    //iniciamos un contador 
    let valor = 0;
    //anidamos otra funcion o closure que va a incrementar el contador 1 por 1
    function incrementar() {
        valor++;
        console.log("Contador incrementado. Valor actual:", valor);
    }
    //anidamos otra funcion que nos retorna el contador incrementado
    function obtenerValor() {
        return valor;
    }
    //la funcion principal finalmente retorna las dos funciones hijo como un objeto, aunque tambien se podria retornar un array con las funciones  
    return {
        incrementar: incrementar,
        obtenerValor: obtenerValor
    };
  }
  //almacenamos la funcion principal en contador par apoder acceder a sus funciones hijo
  const contador = crearContador();
  //bandera
  let continuar = true;

  while (continuar) {
      const opcion = prompt("¿Qué desea hacer? (incrementar / salir)");

      switch (opcion) { 
          case "incrementar":
            //se incrementa el contador
              contador.incrementar();
              break;
         case "salir":
              continuar = false;
              break;
         default:
              alert("Ingresa una opcion valida Usuario...");
              break;
     }
  }
  //finalmente se obtiene el valor 
  alert(`Valor final del contador: ${contador.obtenerValor()}`);
  console.log(`Valor final del contador: ${contador.obtenerValor()}`);
})

//ejercicio 9

boton_exercise9.addEventListener("click", function(){
  //primero cremos una funcion que nos pueda ejecutar un codigo con los segundos que ingrese el usuario, recibe como parametro los segundos 
  function obtencionDatos(segundos) {
    //retorna una promesa con un settimeout que nos permitirá escojer los segundos
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, segundos * 1000);
    });
  } 
  //luego creamos otra funcion que nos permita cargar los datos de una url mediante la web api fetch
  function cargarDatos() {
    //fetch() devuelve una promesa que se resuelve cuando se completa la solicitud HTTP y se recibe la respuesta del servidor.
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          //La propiedad ok indica si la solicitud HTTP fue exitosa
            if (!response.ok) {
              //se crea un nuevo objeto de error con el mensaje especificado y se arroja como una excepción.
                throw new Error('Error al cargar los datos');
            }
            //si todo va bien este método lee el cuerpo de la respuesta como JSON y devuelve una promesa que se resuelve con los datos de ese JSON
            return response.json();
        });
  }
  // le preguntamos a el usuario los segundoos que quiere que tarde el proceso 
  const segundos = parseInt(prompt("Ingrese el intervalo en segundos:"));
  //por ultimo se llama a la primera funcion y como retorno una promesa utilizamos un then para evaluar el exito de la operacion
  obtencionDatos(segundos)
    .then(() => {
        console.log(`Se ha mostrado un mensaje después de ${segundos} segundos.`);
        //finalmente si queremos anidar then entre funciones, tenemos que retornar algo, en este caso retornamos la segunda funcion
        return cargarDatos();
    })
    //se anida otro then que recibio el retorno de el primer then, y se imprimen los datos del archivo JSON
    .then(data => {
        console.log("Datos cargados:", data);
        alert("¡Datos cargados despues de: " + segundos+" segundos!, revisa tu consola");
    })
    //en el catch se evaluan los errores que pueden surgir entre la ejecucion del codigo
    .catch(error => {
        console.error('Error:', error.message);
    });

})
//ejercicio 10 copy code

document.getElementById('botonCopiar10').addEventListener('click', function() {
  // Selecciona el elemento que contiene el texto a copiar
  var textoACopiar = document.getElementById('textoCopiar10');

  // Crea un campo de texto temporal para copiar el texto
  var campoTemporal = document.createElement('textarea');
  campoTemporal.value = textoACopiar.innerText;
  document.body.appendChild(campoTemporal);

  // Selecciona el texto dentro del campo temporal
  campoTemporal.select();
  campoTemporal.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia el texto seleccionado en el portapapeles
  document.execCommand('copy');

  // Elimina el campo temporal
  document.body.removeChild(campoTemporal);

  // Muestra un mensaje de éxito (opcional)
  alert('Texto copiado al portapapeles: ' + textoACopiar.innerText);
  alert("Te redirigiremos a otra pagina para que puedas observar como se comporta el codig en el Event Loop")
  window.open('https://www.jsv9000.app/', '_blank');
});

//ultimo ejercicio
boton_exercise11.addEventListener("click", function(){
    // Función para cargar los datos desde el archivo JSON
  function cargarDatos() {
    // Ruta del archivo data.json
    const url = "data.json";
  
    // Retorna una nueva promesa que se resuelve después del fetch
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al cargar los datos.")
          }
          return response.json();
        })
        .then((data) => {
          resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
          reject(error); // Rechaza la promesa si hay un error
        });
    });
  }
  cargarDatos()
  .then(({ rooms, roomTypes }) => {
    let reservas = []
    let listaHabitacionesOficial = []
    let flag = true
    do{
      let opcionPrograma = Number(prompt("Ingresa la opcion\n1: Visualizar las habitaciones disponibles\n\n2: Realizar una reserva\n\n3: Modificar  una reserva\n\n4: Cancelar una reserva\n\n5: salir"))
      switch(opcionPrograma){
        case 1:
          VisualizarHabitacionesDisponibles()
          break
        case 2:
          let numeroPersonas = Number(prompt("Bienvenido usuario, para reservar una habitacion necesitamos saber cuantas personas se alojarán, tenemos habitaciones con capacidades entre 1 y 6 personas"))
          CrearReserva({rooms, roomTypes}, numeroPersonas)
          break
        case 3:
          ModificarReserva(reservas)
          break
        case 4:
          CancelarReserva(reservas)
          break
        case 5:
          salir()
          break
        default:
          alert("Ingrese una opcion valida")
      }
    }
    while(flag)
    function VisualizarHabitacionesDisponibles(listaHabitacionesOficial){
      let listaHabitaciones = roomTypes.filter((room) => room.id > 0)
      console.log(listaHabitaciones)
      
      let listaHabitacionesDisponibles = rooms.filter(room => listaHabitaciones.some(type => type.id === room.roomTypeId) && room.availability === true)
      console.log(listaHabitacionesDisponibles)
      listaHabitacionesOficial = listaHabitacionesDisponibles
      let habitacionesDisponiblesString = listaHabitacionesDisponibles.map(room => `Numero de habitacion: ${room.number}, precio por noche: ${room.priceNight}, disponibilidad: disponible`).join("\n\n")
      alert(habitacionesDisponiblesString)
    }

    function CrearReserva({rooms, roomTypes}, numeroPersonas, fechaInicial, fechaFinal, nombreArrendador){  
      let listaHabitacionesCapacity = roomTypes.filter((room) => room.capacity >= numeroPersonas)
      console.log(listaHabitacionesCapacity)
      
      let listaHabitacionesDisponibles = rooms.filter(room => listaHabitacionesCapacity.some(type => type.id === room.roomTypeId)&& room.availability === true)
      console.log(listaHabitacionesDisponibles)
      while (true) {
        let habitacionesDisponiblesString = listaHabitacionesDisponibles.map(room => `Numero de habitacion: ${room.number}, precio por noche: ${room.priceNight}`).join("\n ")
        let eleccionHabitacionReserva = Number(prompt(`Ingresa el numero de habitacion que deseas reservar:\n ${habitacionesDisponiblesString}`))

        let habitacionReservada = listaHabitacionesDisponibles.find(room => room.number === eleccionHabitacionReserva)
        if (!habitacionReservada) {
            alert("La habitación seleccionada no está disponible.")
            if (!confirm("¿Deseas intentar nuevamente?")) {
                console.log("El usuario decidió salir del proceso de reserva.")
                return
            }
            continue
        }

        let fechaInicialString = prompt("Ingresa una fecha de inicio en formato YYYY-MM-DD:")
        if (!fechaInicialString) {
            console.log("El usuario canceló la reserva.")
            return
        }
        if (!isNaN(Date.parse(fechaInicialString))) {
            // La fecha es válida, puedes utilizarla
            fechaInicial = new Date(fechaInicialString)
            console.log("Fecha de inicio ingresada por el usuario:", fechaInicial)
        } else {

            console.error("La fecha de inicio ingresada no es válida.")
            continue
        }

        let fechaFinalString = prompt("Ingresa una fecha de finalización en formato YYYY-MM-DD:")
        if (!fechaFinalString) {
            console.log("El usuario canceló la reserva.")
            return
        }
        if (!isNaN(Date.parse(fechaFinalString))) {
            fechaFinal = new Date(fechaFinalString)
            console.log("Fecha de finalización ingresada por el usuario:", fechaFinal)
        } else {
            console.error("La fecha de finalización ingresada no es válida.")
            continue
        }

        nombreArrendador = prompt("Ingresa el nombre del arrendador")
        if (!nombreArrendador) {
            console.log("El usuario canceló la reserva.")
            return
        }

        let reserva = {
            informacion: rooms.find(room => room.number === eleccionHabitacionReserva),
            fechaInicial: fechaInicial,
            fechaFinal: fechaFinal,
            nombreArrendador: nombreArrendador,
            id: reservas.length + 1
        }

        reservas.push(reserva)

        habitacionReservada.availability = false

        listaHabitacionesDisponibles = listaHabitacionesDisponibles.filter(room => room.number !== eleccionHabitacionReserva)

        console.log(listaHabitacionesDisponibles)
        console.log(reservas)

        break
      }
    }

    function ModificarReserva(reservas){
      let listaReservas = reservas.map(room => `Numero de habitacion: ${room.informacion.number}, precio por noche: ${room.informacion.priceNight}, disponible: ${room.informacion.availability}, nombre arrendador: ${room.nombreArrendador}, id: ${room.id}`).join("\n ")
      let reservaModificar = Number(prompt(`Ingresa el id de la habitacion reservada que quieres modificar ${listaReservas}`))
      console.log(listaReservas)
      let reservaAModificar = reservas.find(room => room.id === reservaModificar)
      if(reservaAModificar){
        let modificacion = Number(prompt("Ingresa la propiedad que quieres cambiar:\n\n1: fecha Inicial\n\n2: fecha Final\n\n3: nombre Arrendador"))
        switch(modificacion){
          case 1:
            let fechaInicialString = prompt("Ingresa una fecha de inicio en formato YYYY-MM-DD:")
            if (!isNaN(Date.parse(fechaInicialString))) {
                let newFechaInicial = new Date(fechaInicialString)
                let reservaEncontrada = reservas.find(room => room.id === reservaModificar)
                if(reservaEncontrada){
                  reservaEncontrada.fechaInicial = newFechaInicial
                  console.log("Se ha cambiado la fecha inicial correctamente", newFechaInicial)
                }else{
                  alert("No se encontro la habitacion..")
                }
            } else {

                console.error("La fecha de inicio ingresada no es válida.")
            }
            break
          case 2:
            let fechaFinalString = prompt("Ingresa una fecha de finalización en formato YYYY-MM-DD:")
            if (!isNaN(Date.parse(fechaFinalString))) {
                let newFechaFinal = new Date(fechaFinalString)
                let reservaEncontrada = reservas.find(room => room.id === reservaModificar)
                if(reservaEncontrada){
                  reservaEncontrada.fechaFinal = newFechaFinal
                  console.log("Se ha cambiado la fecha Final correctamente", newFechaFinal)
                }else{
                  alert("No se encontro la habitacion..")
                }
            } else {
                console.error("La fecha de finalización ingresada no es válida.")
            }
            break
          case 3:
            let NewNombreArrendador = prompt("Ingresa el nuevo nombre del arrendador")
            let reservaEncontrada = reservas.find(room => room.id === reservaModificar)
            if(reservaEncontrada){
              reservaEncontrada.nombreArrendador = NewNombreArrendador
              console.log("Se ha cambiado el nombre del arrendador correctamente!")
            }else{
              alert("No se encontro la habitacion..")
            }
            break
          default:
            alert("Opcion invalida...")
        }
        console.log(reservas)
      }
    }

    function CancelarReserva(reservas) {
      let listaReservas = reservas.map(room => `Numero de habitacion: ${room.informacion.number}, precio por noche: ${room.informacion.priceNight}, disponible: ${room.informacion.availability}, nombre arrendador: ${room.nombreArrendador}`).join("\n ")

      let reservaModificar = Number(prompt(`Ingresa el numero de la habitacion reservada que quieres cancelar ${listaReservas}`))

      console.log(listaReservas)

      const indiceReserva = reservas.findIndex(reserva => reserva.informacion.number === reservaModificar)
  
      if (indiceReserva !== -1) { 

          const habitacionReservada = reservas[indiceReserva].informacion

          habitacionReservada.availability = true
  
          reservas.splice(indiceReserva, 1)
  
          console.log(`La reserva de la habitación ${reservaModificar} ha sido cancelada.`)
      } else {
          console.error(`No se encontró una reserva para la habitación ${reservaModificar}.`)
      }
  }
  function salir() {
    console.log("Saliendo del programa...")
    flag = false
    return;
  }
  })
  .catch((error) => {
    console.error("Error al manejar la promesa:", error)
  })
  
})