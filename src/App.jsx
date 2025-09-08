
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

import { space } from "postcss/lib/list";

/*const calcularPuntaje = (kills, muertes) => {
  if (kills > muertes) {
    return kills * 100 - muertes * 50;
  } else if (kills === muertes) {
    return kills * 50;
  } else {
    return kills * 25;
  }
}


const determinarRango = (puntaje) => {
  if (puntaje >= 1000) {
    return "Élite";
  } else if (puntaje >= 500 && puntaje < 1000) {
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
*/

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


/*const evaluarMisión = (dificultad, enemigos, municion) => {
  if (dificultad === "legendaria" && enemigos > 20 && municion < 50) {
    return ("Misión imposible");
  } else if (dificultad === "media" && enemigos <= 15 && municion >= 100) {
    console.log("Misión fácil");
  } else if (enemigos === 0) {
    console.log("Misión completada sin disparos")
  } else {
    console.log("Misión en progreso")
  }
}
const estado = evaluarMisión("legendaria", 25, 40);
console.log(estado)
if (estado === "Misión imposible") {
  console.log("Alerta máxima");
}*/
// imprime Misión imposible pero nunca va a funcionar por que ya asiganamos un valor no definido 
// usando el return dentro de la funcion 



//===============================================================================================================
/*Ejercicio 2: while

Crea un programa que simule el combate contra oleadas de enemigos Covenant.
Instrucciones:

Crea una función flecha llamada simuladorCombate.

Dentro de la función:

Declara una variable con let que represente la vida del Spartan (por ejemplo, 100).

Declara otra variable que represente la oleada actual (empieza en 1).

Usa un ciclo while que siga ejecutándose mientras la vida del Spartan sea mayor que 0 y la oleada sea menor o igual a 5.

En cada iteración:

Resta puntos de vida usando operadores aritméticos.

Usa un if anidado para mostrar:

Si la vida sigue siendo mayor a 70 → “El Spartan resiste con fuerza”.

Si es mayor a 30 pero menor o igual a 70 → “El Spartan está herido pero sigue luchando”.

Si es menor o igual a 30 → “El Spartan está en peligro crítico”.

Incrementa el número de oleada (oleada++).

Al salir del ciclo, usa un else final para mostrar si sobrevivió todas las oleadas o fue derrotado.*/

/*const simuladorCombate = (vida_del_spartan, oleadas_enemigos_covenant) => {
  while (vida_del_spartan > 0 && oleadas_enemigos_covenant <= 5) {
    if (vida_del_spartan > 70) {
      console.log("El Spartan resiste con fuerza"); 
    } else if (vida_del_spartan > 30 && vida_del_spartan <= 70) {
      console.log("El Spartan está herido pero sigue luchando");
    } else { oleadas_enemigos_covenant++;
      console.log("El Spartan está en peligro crítico");
    }
  }
}

let vida_del_spartan = 15;
let oleadas_enemigos_covenant = 4;
simuladorCombate(vida_del_spartan, oleadas_enemigos_covenant);*/

/*Objetivo: Simular 6 rondas de práctica y clasificar el rendimiento.
Instrucciones:
Crea una función flecha evaluarEntrenamiento() sin parámetros.
Dentro, declara:
const RONDAS = 6;
let puntajeTotal = 0;
Usa un ciclo for de i = 1 a RONDAS para calcular el puntaje de cada ronda:
El puntaje de ronda es: base = i * 17 (operación aritmética).
Si i es par y base >= 40, suma un bono de +10 a base.
Si i es impar y base < 40, resta -5 a base.
Acumula en puntajeTotal usando asignación (puntajeTotal += base).
Al terminar el for, clasifica con condicionales:
puntajeTotal >= 200 → "Élite"
>= 140 → "Operativo"
en otro caso → "Recluta"
Dentro de esta clasificación, anida un if que verifique si hubo al menos 3 rondas pares (pista: cuenta pares durante el for)
 y puntajeTotal >= 180 para marcar "Racha destacada".
La función debe imprimir:
Puntaje total:
Rango:
Notas: (si hubo “Racha destacada” u “Observación: variación alta” cuando el puntaje de alguna ronda haya sido negativo).
No retornes valores. Llama a la función. */
//===============================================================================================================================


/*2) Supervivencia por oleadas – while
Objetivo: Sobrevivir hasta 5 oleadas gestionando vida y munición.
Instrucciones:
Crea una función flecha simularSupervivencia(vidaInicial, municionInicial) que no retorne.
Declara:
let vida = vidaInicial;
let municion = municionInicial;
let oleada = 1;
Usa un while que corra mientras vida > 0 && oleada <= 5.
Por oleada:
Daño recibido: si oleada es impar, vida -= 12, si es par, vida -= 8.
Gasto de munición: municion -= 7 (si municion <= 0, aplica penalización extra vida -= 10).
Condicional anidado:
Si vida > 70 → "Estado: fuerte"
else if (vida > 35) → "Estado: estable
else → "Estado: crítico"
Dentro de “crítico”, si municion > 0 y oleada < 5, imprime "Alerta: repliégate y conserva munición".
oleada++ (asignación).
Al salir del while:
Si vida > 0 && oleada > 5 → "Supervivencia lograda"
else → "Derrota en la oleada X" (indica número).
Llama a la función con valores de prueba (por ejemplo, 100, 40). No uses return.*/

//===============================================================================================================================

/*3) Asalto al bastión – combinación for + while
Objetivo: Simular 3 secciones del mapa; en cada sección hay enemigos con barra de salud que se reduce hasta 0.
Instrucciones:
Crea una función flecha asaltarBastion() sin parámetros (no retorna).
Variables:
const SECCIONES = 3;
let recursos = 45; (munición/energía combinada)
let progreso = 0;
Ciclo for de seccion = 1 a SECCIONES:
Define la salud del enemigo de la sección:
let salud = 20 + seccion * 10;
Mientras el enemigo siga con vida y tengas recursos:
while (salud > 0 && recursos > 0) { ... }
Por iteración:
Daño base: let daño = 6 + seccion;
Bono lógico: si seccion es 2 o recursos % 2 === 0, suma +2 al daño.
Penalización anidada:
Si recursos < 10 y salud > 15, reduce el daño en -3.
Dentro de ese caso, si recursos < 5, reduce otro -2 (anidado).
Aplica: salud -= daño;
Gasta recursos: recursos -= 3;
Si salud <= 0, imprime "Sección X despejada".
Tras el while, condicional:
Si salud <= 0 → progreso += 1;
else → imprime "Sección X incompleta por falta de recursos".
Después del for:
Si progreso === SECCIONES y recursos >= 0 → imprime "Bastión asegurado"
else if (progreso >= 2 && recursos > 0) → "Control parcial del bastión"
else → "Retirada estratégica"
Anida dentro del caso “Retirada” un if que diga "Reabastecer antes del próximo intento" si recursos <= 5.
Ejecuta asaltarBastion(). */

/*const asaltarBastion = () => {
  const SECCIONES = 3;
  let recursos = 45;
  let progreso = 0;

  for (let seccion = 1; seccion <= SECCIONES; seccion++) {
    let salud = 20 + seccion * 10;

    while (salud > 0 && recursos > 0) {
      let daño = 6 + seccion;

      if (seccion === 2 || recursos % 2 === 0) {
        daño += 2;
      }
      if (recursos < 10 && salud > 15) {
        daño -= 3;
        if (recursos < 5) {
          daño -= 2;
        }
      }
      salud -= daño;
      recursos -= 3;

      if (recursos <= 0) 
        recursos = 0;
    }

    if (salud <= 0) {
      console.log(`Sección ${seccion} despejada`);
      progreso += 1;
    } else {
      console.log(`Sección ${seccion} incompleta por falta de recursos`);
    }
  }
  if (progreso === SECCIONES && recursos >= 0) {
    console.log("Bastión asegurado");
  } else if (progreso >= 2 && recursos > 0) {
    console.log("Control parcial del bastión");
  } else {
    console.log("Retirada estratégica");
    if (recursos <= 5) {
      console.log("Reabastecer antes del próximo intento");
    }
  }
}*/
//===============================================================================================================================
/* 🕹️ Ejercicio – “La Prueba del Spartan”
Un Spartan debe entrenar para superar diferentes obstáculos antes de entrar en combate.
Instrucciones:
Crea una función llamada pruebaSpartan(nombre, energiaInicial, municionInicial).
El Spartan atraviesa 3 etapas de entrenamiento.
En cada etapa debe gastar recursos y obtener un puntaje que se acumula.
El puntaje depende de los recursos disponibles y de la etapa en la que se encuentra.
El Spartan pierde energía y munición conforme avanza.
Si se queda sin recursos, debe terminar inmediatamente la prueba.
Al final de la prueba, se debe mostrar un reporte con:
Nombre del Spartan
Energía final
Munición final
Puntaje acumulado
Resultado final: "Aprobado" o "Reprobado" según su desempeño.
👉 Nota:
Deberás decidir si en alguna parte se requiere un ciclo o varios.
Habrá situaciones donde conviene usar decisiones (if/else) y operadores.
El puntaje no se da explícito, el alumno debe inventar una fórmula razonable que cumpla la lógica de que más recursos y etapas avanzadas signifiquen más puntaje.
El flujo debe ser consistente y no debe permitir valores imposibles (como puntaje negativo).*/

/*const pruebaSpartan = (nombre, energiaInicial, municionInicial) => {
  let municionInicial =;
  let energiaInicial =;

  for ()

    if(etapa === "Recluta" && municionInicial <=15 && energiaInicial <=50){
      console.log(`obtuviste ${puntaje+10} felicidades`);
     if(eliminaciones >=10 && eliminaciones <20){
      console.log(`obtuviste ${puntaje+7} muy bien`);
     }
    } else {
      console.log(`obtuviste ${puntaje+3}`)
    }
   if(etapa === "Operativo" && municionInicial <=30 && energiaInicial <=35){
      console.log(`obtuviste ${puntaje+10} felicidades`);
     if(eliminaciones >=21 && eliminaciones <30){
      console.log(`obtuviste ${puntaje+7} exelente`);
     }
    } else {
      console.log(`obtuviste ${puntaje+3} bien`)
    }
    if(etapa === "Elite" && municionInicial <=10 && energiaInicial <100){
      console.log(`obtuviste ${puntaje+15} felicidades`);
     if(eliminaciones >=){
      console.log(`obtuviste ${puntaje+10} bien hecho jefe`);
     }
    } else {
      console.log(`obtuviste ${puntaje+5} bien`)
    }
  }
    for (let ETAPA = 1; ETAPA =etapas ;etapas++){
    let salud = 12 + etapas * 10;

    while(energiaInicial >15 && etapas >=3){
      municionInicial += 4;

      if(etapas === 4 && salud <=30) {
        municionInicial += 2;
      } 
    } 
  }

  console.log(`Nombre del Spartan: ${nombre}`)
  console.log(`Energía final: ${energiaInicial}`)
  console.log(`Munición final: ${municionInicial}`)
  console.log(`Puntaje: ${puntaje_acumulado}`)
 console.log(`Resultado final: ${Resultado_final}`)*/
/*const asaltarBastion = () => {
 const SECCIONES = 3;
 let recursos = 45;
 let progreso = 0;

 for (let seccion = 1; seccion <= SECCIONES; seccion++) {
   let salud = 20 + seccion * 10;

   while (salud > 0 && recursos > 0) {
     let daño = 6 + seccion;

     if (seccion === 2 || recursos % 2 === 0) {
       daño += 2;
     }
     if (recursos < 10 && salud > 15) {
       daño -= 3;
       if (recursos < 5) {
         daño -= 2;
       }
     }
     salud -= daño;
     recursos -= 3;

     if (recursos <= 0) 
       recursos = 0;
   }

   if (salud <= 0) {
     console.log(`Sección ${seccion} despejada`);
     progreso += 1;
   } else {
     console.log(`Sección ${seccion} incompleta por falta de recursos`);
   }
 }
 if (progreso === SECCIONES && recursos >= 0) {
   console.log("Bastión asegurado");
 } else if (progreso >= 2 && recursos > 0) {
   console.log("Control parcial del bastión");
 } else {
   console.log("Retirada estratégica");
   if (recursos <= 5) {
     console.log("Reabastecer antes del próximo intento");
   }
 }
}
 */
//=================================================================================================================================================

/*🕹️ Ejercicio – “Simulación de batalla contra un Jefe Covenant”
Un Spartan debe enfrentarse a un Jefe Covenant que tiene varias fases de combate.
Instrucciones:
Crea una función llamada batallaContraJefe(nombre, energiaInicial, municionInicial).
El combate tiene 3 fases:
En cada fase, el Jefe tiene más salud que la anterior.
El Spartan debe intentar reducir la salud del jefe atacando.
En cada intento de ataque:
El Spartan pierde cierta energía y munición.
Si se queda sin recursos, la batalla termina inmediatamente.
El daño hecho depende de los recursos disponibles y la fase.
Si el Spartan logra derrotar al Jefe en una fase, pasa a la siguiente.
Si no logra derrotarlo, el combate termina.


Al final, muestra un reporte con: 
Nombre del Spartan
Energía final
Munición final
Fase alcanzada
Resultado final: "Victoria Total", "Victoria Parcial" o "Derrota".


👉 Pistas:
Decide cuándo usar ciclos (for, while) para manejar fases y ataques.
Usa if / else if / else para clasificar los estados del Spartan (ej. fuerte, herido, crítico).
Combina operadores aritméticos, lógicos y de comparación para calcular daño, gasto de recursos y condiciones de victoria.
Usa variables (let) y constantes (const) para organizar los valores.
Haz que la función retorne un resumen final y también lo imprima en consola.*/

/*
const batallaContraJefe = (nombre, energiaInicial, municionInicial) => {
}

  console.log(`Nombre del Spartan: ${nombre}`)
  console.log(`Energía final: ${energiaInicial}`)
  console.log(`Munición final: ${municionInicial}`)
  console.log(`Fase alcanzada: ${FaseAlcanzada}`)
  console.log(`Resultado final: ${"Victoria Total", "Victoria Parcial" o "Derrota"}`)*/



//=================================================================================================================================================
/*Ejercicio 1:
Un escuadrón Spartan tiene que entrenar durante n días.
Cada día debe registrarse un puntaje de entrenamiento.
Al final, muestra el promedio de puntaje de todos los días.*/

/*
let dias = 10;
let puntaje = 0;
for (let i = 1; i <= dias; i++) {
  
  puntaje ++;
  if(dias >=0 && dias <=10) {
    puntaje = puntaje * dias;
  } 
  console.log(puntaje);
}

*/
//=================================================================================================================================================
/*Ejercicio 2:
Crea un programa que muestre los primeros 15 números de la serie de Fibonacci.
Cada número nuevo se obtiene sumando los dos anteriores.*/






//=================================================================================================================================================
/*Ejercicio 3:
Un jugador dispara a blancos en 10 rondas.
En cada ronda el daño se calcula de forma diferente según el número de ronda.
Al final muestra el daño total acumulado y clasifica al jugador como "Bajo", "Medio" o "Alto" según el resultado.*/


/*
const rondas_totales = 10;
let daño = 1;
for(let numero_ronda = 1; numero_ronda <= rondas_totales; numero_ronda++) {
daño = daño * rondas_totales; 
if (daño <=300000 && numero_ronda < rondas_totales) {
console.log ("Bajo");
} else if (daño >=4000000 && daño <=60000000 && numero_ronda < rondas_totales) {
console.log ("Medio");
} else {
console.log ("Alto");
}
console.log(`Daño total: ${daño}`)
}
*/



//=================================================================================================================================================
/*Ejercicio 4:
Un Spartan tiene 100 de energía.
Cada ataque recibido le resta un valor variable.
Simula ataques hasta que la energía llegue a 0 o menos, mostrando la energía en cada paso.*/
/*
let bajo_ataque = 20;
let daño_recibido = 20;
let energia = 100;
for (let i = 1; i <= bajo_ataque; i++) {
  energia = energia - daño_recibido;
  if (energia > 0) {
    console.log(`Energia total; ${energia}`);
  } else {
    break;
  }

}
*/



//=================================================================================================================================================
/*Ejercicio 5 :
Un programa debe pedir al usuario números hasta que ingrese uno negativo.
Después, muestra cuál fue el número más grande que ingresó.*/
/*
const numero_negativo = -12;
let numero_de_rondas = 10;
let peticion = 15;
for (let i = 0; i <= numero_de_rondas; i++) {
  peticion = peticion - i;
  if (peticion > numero_negativo) {
    console.log(peticion)
  }
}
console.log(`Numero mas grande: ${peticion}`)


*/


//=================================================================================================================================================
/*Ejercicio 6:
Un jefe enemigo empieza con 50 de salud.
El Spartan ataca con un valor aleatorio cada turno.
La batalla continúa hasta que la salud llegue a 0 o menos.
Al final, muestra cuántos turnos tomó derrotar al jefe.*/

/*
let Jefe_salud = 50;
let Turno = 15;
let spartan_daño;

for (let Ronda = 1; Ronda <= Turno; Ronda++) {
  spartan_daño = Math.floor(Math.random() * 11) + 5;
  Jefe_salud = Jefe_salud - spartan_daño;
  console.log(`Ronda ${Ronda}: Spartan hizo ${spartan_daño} de daño. Salud restante del jefe: ${Math.max(Jefe_salud, 0)}`);
  if (Jefe_salud <= 0) {
    console.log(`El Spartan derrotó al jefe en la ronda ${Ronda}`);
    break;
  }
}
if (Jefe_salud > 0) {
  console.log(`El jefe sobrevivió después de ${Turno} rondas. Salud final: ${Jefe_salud}`);
}
*/

//=================================================================================================================================================
/*Ejercicio 1:
Un Spartan entrena disparando a 30 blancos.
Cada blanco tiene una puntuación diferente según su número.
Al final, muestra la puntuación total y un mensaje indicando si logró la calificación mínima para aprobar.*/


/*
let rondas = 10;
let blancos = 0;
let Spartan_dispara;
for (let i = 1; i <= rondas; i++) {
    blancos += 3;
    Spartan_dispara += 4;
Spartan_dispara = Spartan_dispara - blancos;
console.log(`la puntuacion del spartan fue: ${Spartan_dispara} y los blancos eliminados fueron: ${blancos}`)
}
*/


//=================================================================================================================================================

/*Ejercicio 2:
Crea un programa que muestre los primeros n números impares y al final indique cuántos de esos fueron mayores a 50.*/
/*
let n = 17;
let contadorImpares = 0;
let numeroActual = 1;
let mayores_a_50 = 0;

while(contadorImpares < n){
if (numeroActual % 2 !== 0) { 
    console.log(numeroActual);
    contadorImpares++;

    if (numeroActual > 50) {
      mayores_a_50++;
    }
  }
console.log(`Primeros números impares: ${n}`);
  numeroActual++;
}

console.log(`De los ${n} números impares, ${mayores_a_50} son mayores a 50.`);
*/

//=================================================================================================================================================

/*Ejercicio 3:
Simula la exploración de 10 planetas.
Cada planeta puede tener recursos o estar vacío.
Suma los recursos recolectados y al final imprime si el Spartan encontró suficientes para sobrevivir.*/

/*
let Exploracion_de_planetas = 10;

for (let i = 1; i <= Exploracion_de_planetas; i++) {
  let planetas = Math.floor(Math.random() * 20) + 1;
  if (planetas <= 5) {
    console.log("El Spartan no tiene recursos suficientes");
  } else {
    console.log("El Spartan logro sobrevivir");
  }
  let recursos = Math.floor(Math.random() * 20) + 1;
  if (recursos >= 10) {
    console.log(`Tienes estos recursos: ${recursos}`)
  } else {
    console.log(`No tienes muchos suministros: ${recursos}`)
  }

}

*/

//=================================================================================================================================================

/*Ejercicio 4:
Un Spartan inicia con 80 de energía.
Cada turno recibe daño aleatorio hasta que su energía llegue a 0 o menos.
Al final muestra cuántos turnos resistió.*/

/*
let Spartan_energia = 80;
let turno = 20;

for (let i = 1; i <= turno; i++) {
  let daño_aleatorio = Math.floor(Math.random() * 10) + 1;
  Spartan_energia = Spartan_energia - daño_aleatorio;
  if (Spartan_energia >= 0) {
    
    console.log(`El Spartan resistió ${turno} turnos y la energía restante: ${Spartan_energia}`);
  } 
}
*/
//=================================================================================================================================================

/*Ejercicio 5:
Un programa debe pedir al usuario números uno por uno y contar cuántos son pares.
El ciclo termina cuando el usuario ingresa un número mayor a 100.
Al final muestra el total de pares ingresados.*/
/*
let rondas = 7;
let primer_numero = 0;
for (let i = 1; i <= rondas; i++) {
 Math.floor(Math.random() * 20) + 1;
primer_numero = primer_numero + Math.floor ;
let pares = 100;
  while (pares % 2 === 0){
    
pares++;
  };
  
  if (primer_numero <= 100) {
  } else {
    break;
  }
  console.log(`numero actual: ${primer_numero} y el total de pares fue ${pares}`);
}
*/
//=================================================================================================================================================

/*Ejercicio 6:
Un jefe alienígena empieza con 300 de salud.
El Spartan ataca cada turno y resta salud variable.
La batalla termina si la salud del jefe llega a 0 o si pasan más de 15 turnos.
Al final imprime el resultado: Victoria, Derrota o Empate técnico.*/
/*
let jefe_alienígena = 300;

for(){
  Spartan_ataca = Math.floor(Math.random() * 20) + 1;
}

*/

//=================================================================================================================================================

/*1)
const mostrarCuadrados = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i * i);
  }
}; 

const resultado = mostrarCuadrados(5);
console.log("La suma de los cuadrados es:", resultado + 10);


Pregunta: ¿Qué se imprime en consola y por qué?
imprime la suma de los cuadros pero no esta definido asi que no imprime la suma*/


// 1/2 punto

//=================================================================================================================================================
/*2)*/
/*
const sumarHasta = (limite) => {
  let suma = 0;
  let i = 1;
  while (i <= limite) {
    suma += i;
    i++;
  }
  console.log("Suma calculada:", suma);
}; 

const total = sumarHasta(10);
if (total > 50) {
  console.log("Mayor a 50");
} else {
  console.log("Menor o igual a 50");
}
*/
/*Pregunta: ¿Qué pasa en el if y por qué?
si chambea bien
*/
//=================================================================================================================================================
/*3)

const contarPares = (n) => {
  let contador = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log("Par:", i);
      contador++;
    }
  }
}; 

const pares = contarPares(10);
console.log("Total de pares:", pares);

Pregunta: ¿Qué valor real muestra en “Total de pares”?
ninguno por que no esta definido y para arreglarlo le falta un return 
 */

//=================================================================================================================================================
/*4)

const restarEnergia = (energiaInicial) => {
  let energia = energiaInicial;
  while (energia > 0) {
    energia -= 15;
    console.log("Energía actual:", energia);
  }
  console.log("Finalizó la simulación");
}; 

const energiaFinal = restarEnergia(100);
const total = energiaFinal + 50;
console.log("Energía final + 50:", total);

Pregunta: ¿Por qué total no tiene el valor esperado?
*/

//=================================================================================================================================================
/*5) Simulación de oleadas (con todo)

Instrucciones:
  1.	Crea una función simularOleadas(vidas, municion) que:
  •	Recorra 3 oleadas de enemigos.
  •	Cada oleada requiere que el Spartan gaste munición y energía en un bucle.
  •	Si en algún momento municion <= 0 || vidas <= 0, se termina el juego.
  2.	Usa condicionales para mostrar:
  •	"Estado crítico" si las vidas bajan de 2.
  •	"Sigue en combate" si tiene más.
  3.	Al final, imprime:
  •	Vidas restantes
  •	Munición restante
  •	Oleada alcanzada
  •	Resultado: "Victoria" si pasó todas las oleadas, "Derrota" en otro caso.
  */
/*
const simularOleadas = (vidas, oleadas, Spartan_municion, Spartan_energia) => {


  let oleada_alcanzada = 0;
  let enemigos = 1;
  for (let i = 1; i <= oleadas; i++) {
    enemigos++;

    Spartan_municion -= enemigos;
    Spartan_energia -= enemigos * 2;

    if (Spartan_energia <= 0) {
      vidas--;
      Spartan_energia = 100;
    }
    if (vidas < 2) {
      console.log("Estado crítico")
    } else {
      console.log("Sigue en combate")
    }
    oleadaAlcanzada = i;
    if (enemigos <= 0) {
      console.log("Victoria")
    }

    if (Spartan_municion <= 0 || vidas <= 0) {
      break;
    }
    console.log(`vidas restantes: ${vidas} la municion que te queda: ${Spartan_municion}`)
    console.log(`Oleada alcanzada: ${oleada_alcanzada}`)
  }
}
*/



//=================================================================================================================================================
/*6) Torneo Spartan (con todo)

Instrucciones:
  1.	Crea una función torneoSpartan(nombre, rondas) que simule el puntaje de un jugador.
  2.	Por cada ronda (for):
  •	Genera un puntaje base.
  •	Usa un while interno para restar energía conforme dispara.
  •	Suma puntaje según condiciones:
  •	Si la energía termina alta, bonificación extra.
  •	Si termina baja pero sobrevive, penalización.
  3.	Al final:
  •	Imprime nombre, puntaje total y un rango ("Recluta", "Operativo", "Élite").
  •	Retorna un objeto con toda la información.
*/

/*
const torneoSpartan = (nombre, rondas) => {
  let energia = 100;
  let puntajeTotal = 0;

  for (let i = 1; i <= rondas; i++) {
    let puntajeBase = Math.floor(Math.random() * 100) + 50;
    let disparos = 0;

    while (energia > 0 && disparos < 10) {
      energia -= 5;
      disparos++;
    }

    if (energia > 60) {
      puntajeBase += 30;
    } else if (energia > 0) {
      puntajeBase -= 20;
    }

    puntajeTotal += puntajeBase;
    energia += 40;
    if (energia > 100) {
      energia = 100;
    }
  }
  let rango;

  if (puntajeTotal < 200) {
    rango = "Recluta";
  } else if (puntajeTotal < 350) {
    rango = "Operativo";
  } else {
    rango = "Élite";
  }

  console.log(`Nombre: ${nombre}`);
  console.log(`Puntaje Total: ${puntajeTotal}`);
  console.log(`Rango Obtenido: ${rango}`);

  return { nombre, puntaje: puntajeTotal, rango };
}

*/



//=================================================================================================================================================



/*
ejercicio 1 – Inventario de armas
Un Spartan tiene un inventario con estas armas:
["Pistola", "Rifle", "Escopeta"]
Instrucciones:
Agrega un arma nueva al final del inventario.
Quita la primera arma del inventario.
Muestra en consola cuántas armas hay en total.
Recorre el inventario e imprime cada arma con el texto:
"Arma disponible: [arma]". */

/*Spartan_inventario.shift();*/
/*
let Spartan_inventario = ["Pistola", "Rifle", "Escopeta", "granada", "mazo", "espada de luz"];
const Add_weapon = (weapon) => {
  Spartan_inventario.push(weapon);
  console.log(`Cuantas armas hay en total: ${Spartan_inventario.length}`);
  for (let i = 0; i < Spartan_inventario.length; i++) {
    console.log(`Arma disponible: ${Spartan_inventario[i]}`)
  }
}
*/

// if logicos
//console.log("ejncencnce :", 10 < 9 ? "y" : "x");


//=================================================================================================================================================


/*🔹 Ejercicio 2 – Puntuaciones de misión
Un equipo de Spartans obtuvo las siguientes puntuaciones en una misión:
[80, 95, 70, 100, 60]
Instrucciones:
Muestra la puntuación más alta.
Muestra la puntuación más baja.
Calcula el promedio de todas las puntuaciones.
Si el promedio es mayor o igual a 75, imprime "Misión exitosa", de lo contrario "Misión fallida". */

const puntuacion = () => {
  let puntuacion_mision = [80, 95, 70, 100, 60];

  let mate = Math.max(...puntuacion_mision);
  Math.max(puntuacion_mision[0],puntuacion_mision[1],puntuacion_mision[2],puntuacion_mision[3],puntuacion_mision[4]);
  console.log(`Puntuacion maxima: ${mate}`);

  let matematica = Math.min(...puntuacion_mision);
  console.log(`Promedio minimo: ${matematica}`);

  let Promedio = Math.round(puntuacion_mision);
  console.log(`Promedio: ${Promedio}`);

  if (puntuacion_mision >= 75) {
    console.log("Mision exitosa");
  } else {
    console.log("Mision fallida");
  }
}

//=================================================================================================================================================


/*🔹 Ejercicio 3 – Tabla de multiplicar
Crea un array vacío llamado tablaDelCinco.
Instrucciones:
Usa un ciclo para llenar el array con los resultados de la tabla del 5 (del 5×1 al 5×10).
Imprime el array completo.
Recorre el array y muestra cada valor en una línea con el texto:
"5 x [índice] = [valor]".*/

const Vacio = () => {
  let Serie = 10;
  let tablaDelCinco = [];
  for( let i = 10; i <= Serie; i++ ){
   tablaDelCinco.push(5 * i);
   console.log(`1 Tabla del cinco: ${tablaDelCinco[0]}`);
   console.log(`2 Tabla del cinco: ${tablaDelCinco[1]}`);
   console.log(`3 Tabla del cinco: ${tablaDelCinco[2]}`);
   console.log(`4 Tabla del cinco: ${tablaDelCinco[3]}`);
   console.log(`5 Tabla del cinco: ${tablaDelCinco[4]}`);
   console.log(`6 Tabla del cinco: ${tablaDelCinco[5]}`);
   console.log(`7 Tabla del cinco: ${tablaDelCinco[6]}`);
   console.log(`8 Tabla del cinco: ${tablaDelCinco[7]}`);
   console.log(`9 Tabla del cinco: ${tablaDelCinco[8]}`);
   console.log(`10 Tabla del cinco: ${tablaDelCinco[9]}`);
  }
}

//=================================================================================================================================================


const App = () => {

Vacio();


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <h1 className="text-4xl font-bold text-purple-600">{ }</h1>
    </div>
  );
}
export default App;