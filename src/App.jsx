
/*Crea 3 funciones flecha que trabajen juntas para simular el sistema de un minijuego:

  calcularPuntaje(kills, muertes)

Si kills es mayor que muertes → retornar kills * 100 - muertes * 50

Si kills es igual a muertes → retornar kills * 50

Si kills es menor que muertes → retornar kills * 25

  determinarRango(puntaje)

Si puntaje >= 1000 → retornar "Élite"

Si puntaje >= 500 → retornar "Operativo"

Si no → retornar "Recluta"

  mostrarResumen(nombre, kills, muertes)

Usar las dos funciones anteriores para calcular y mostrar en consola:
Jugador: [nombre]
Puntaje: [puntaje]
Rango: [rango] */

const calcularPuntaje = (kills, muertes) => {
  if(kills > muertes) {
    return kills * 100 - muertes * 50;
  } else if(kills === muertes) {
    return kills * 50;
  } else {
    return kills * 25;
  }
}


const determinarRango = (puntaje) => {
  if(puntaje >= 1000){
    return "Élite";
  } else if(puntaje >=500 && puntaje <1000) {
    return "Operativo";
  } else {
    return "Recluta";
  }
}



const mostrarResumen = (nombre, kills, muertes) => {
  const calcular = calcularPuntaje(kills, muertes)
  const determinar = determinarRango(calcular)
  

console.log(`Jugador: ${nombre}`)
console.log(`Puntaje: ${calcular}`)
console.log(`Rango: ${determinar}`)
}


//===============================================================================================================

/*const calcularVelocidad = (distancia, tiempo) => {
  return(distancia / tiempo);
};

const velocidad = calcularVelocidad(100, 10);
if (velocidad > 50) {
  console.log("Muy rápido");
} else if (velocidad <= 50) {
  console.log("Velocidad normal");
} else {
  console.log("Datos inválidos");
}*/
/*Tareas:
a) Explica qué valor real toma velocidad y por qué.
b) Indica qué sucede cuando tiempo es 0.
c) Corrige el código con el mínimo cambio para que if funcione y se eviten errores de división por cero.*/

/*
A) muy rapido ,para que se ejecute

B) lo que va a suceder cuando tiempo es 0 solo va imprimir "Datos inválidos"

C) usando un return en la linea 64 cambias el console.log por un return
*/

//===============================================================================================================

/*Escribe una función flecha evaluarMisión(dificultad, enemigos, municion) que:

Si dificultad es "legendaria" y enemigos > 20 y municion < 50 → mostrar "Misión imposible"

Si dificultad es "media" y enemigos <= 15 o municion >= 100 → mostrar "Misión fácil"

Si enemigos === 0 → mostrar "Misión completada sin disparos"

En cualquier otro caso → mostrar "Misión en progreso"

const estado = evaluarMisión("legendaria", 25, 40);
if (estado === "Misión imposible") {
  console.log("Alerta máxima");
}
*/


const evaluarMisión = (dificultad, enemigos, municion) => {
  if(dificultad === "legendaria" && enemigos >20 && municion <50){
    return("Misión imposible");
  }else if(dificultad === "media" && enemigos <=15 && municion >=100){
    console.log("Misión fácil");
  }else if(enemigos === 0){
    console.log("Misión completada sin disparos")
  }else{
    console.log("Misión en progreso")
  }
}
const estado = evaluarMisión("legendaria", 25, 40);
console.log(estado) 
if (estado === "Misión imposible") {
  console.log("Alerta máxima");
} 
// imprime Misión imposible pero nunca va a funcionar por que ya asiganamos un valor no definido 
// usando el return dentro de la funcion 

const App = () => {



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <h1 className="text-4xl font-bold text-purple-600">{ }</h1>
    </div>
  );
}
export default App;