/* 1. Arrow Function sin parámetros (10 pts) 
Crea una función flecha que no reciba ningún parámetro y que, al llamarse, imprima en consola un saludo como "¡Bienvenido al sistema!".
*/
const saludo = () => {
  console.log("bienvenido al sistema");
}



/* 2. Arrow Function con parámetros
Crea una función flecha que reciba un nombre como parámetro y muestre en consola:
"Hola, me llamo [nombre]".
*/
const imprimirNombre = (nombre) => {
  console.log("hola me llamo", nombre);
}


/*3. Arrow Function con parámetros y retorno
Crea una función flecha que reciba dos números y retorne su suma.
Luego muestra el resultado en consola.
*/
const sumar = (a, b) => {
  let resultado = a + b;
  return resultado;
};



/*4. Evaluador con if, else if y else
crea una función flecha llamada evaluarNota que reciba una calificación numérica (0 a 10) y muestre:

"Excelente" si es 10

"Muy bien" si es 9 u 8

"Bien" si es 7 o 6

"Reprobado" si es menor a 6
*/
const evaluarNota = (calificacion) => {
  if (calificacion === 10) {
    console.log("excelente");
  } else if (calificacion === 9 || calificacion === 8) {
    console.log("muy bien");
  } else if (calificacion === 7 || calificacion === 6) {
    console.log("bien");
  } else if (calificacion <= 6) {
    console.log("reprobado");
  }
}//TODO: PONER BIEN LA LOGICA PARA CONTEPLAR DECIMALES.


/*5.  Condicional con operador lógico y comparadores 
Crea una función flecha llamada verificarAcceso que reciba dos datos: edad y si tiene ticket (true o false).
Debe mostrar:

"Acceso permitido" si tiene 18 años o más y tiene ticket.

"Acceso denegado" en cualquier otro caso.
*/
const verificarAcceso = (edad, tieneTicket) => {
  if (edad >= 18 && tieneTicket) {
    console.log("acceso permitido");
  } else {
    console.log("acceso denegado");
  }
}


/*6. Arrow function con if anidados y else if 
Crea una función flecha llamada clasificarUsuario que reciba tres datos: edad, si tiene INE (true o false), y si tiene invitación (true o false).
Lógica:
Si edad < 18 → "Acceso denegado por edad"
Si edad >= 18 y < 21:
  Si tiene INE → "Acceso limitado"
  Si no tiene INE → "Debes presentar identificación"
Si edad >= 21:
  Si tiene INE o tiene invitación → "Acceso completo autorizado"
  Si no tiene ninguno → "No puedes ingresar"
*/
const clasificarUsuario = (edad, INE, invitacion) => {
  if (edad < 18) {
    console.log("acceso denegado por edad");
  } else if (edad >= 18 && edad < 21 && INE) {
    console.log("acceso limitado");
  } else if (edad >= 18 && edad < 21 && !INE) {
    console.log("debes presentar indentificacion");
  }
  else if (edad >= 21 || INE || invitacion) {
    console.log("acceso completo autorizado");
  }
}

const clasificarUsuarioBIEN = (edad, INE, invitacion) => {
  if (edad < 18) {
    console.log("acceso denegado por edad");
  }
  else if (edad >= 18 && edad < 21) {
    if (INE) {
      console.log("acceso limitado");
    }
    else {
      console.log("debes presentar indentificacion");
    }
  }
  else if (edad >= 21) {
    if (INE || invitacion) {
      console.log("acceso completo autorizado");
    } else {
      console.log("no puedes ingresar");
    }
  }
}


/*7.Evaluador avanzado con varias funciones 
Crea las siguientes funciones flecha:

esPar(numero) → retorna true si el número es par

clasificarEdad(edad) → retorna "Niño", "Adolescente" o "Adulto"

evaluarEntrada(edad, tieneTicket, esInvitado) → muestra:

"Entrada especial" si es menor de edad pero está invitado

"Entrada general" si tiene más de 18 y tiene ticket

"Acceso denegado" en cualquier otro caso

Llama a las 3 funciones con valores de prueba y muestra los resultados en consola.
*/

const esPar = (numero) => {
  if (numero % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

const clasificarEdad = (edad) => {
  if (edad < 13) {
    return "nino";
  } else if (edad >= 13 && edad < 18) {
    return "adolescente";
  } else {
    return "adulto";
  }
}

const evaluarEntrada = (edad, tieneTicket, esInvitado) => {
  if (edad < 18 && esInvitado) {
    return "Entrada especial";
  } else if (edad >= 18 && tieneTicket) {
    return "Entrada general";
  } else {
    return "acceso denegado";
  }
}


/* 🧪 Ejercicio 1 – Evaluador de perfil de usuario (Alumno A)
🎯 Instrucciones:
Crea una función flecha llamada evaluarPerfil que reciba los siguientes parámetros:

nombre (string)

edad (número)

esEstudiante (boolean)

calificacion (número del 0 al 10)

La función debe retornar un mensaje con la siguiente lógica:

Si la edad es menor a 13 → "Hola [nombre], eres un niño, ¡disfruta tu infancia!"

Si tiene entre 13 y 17 y es estudiante:

Si su calificación es mayor o igual a 8 → "Adolescente sobresaliente"

Si es menor a 8 → "Adolescente, sigue esforzándote"

Si tiene 18 o más:

Si es estudiante y su calificación es mayor o igual a 9 → "Joven universitario destacado"

Si no es estudiante → "Adulto en formación libre"

En cualquier otro caso → "Perfil no clasificado"

Llama a la función con tus propios datos y muestra el resultado en consola.*/

const evaluarPerfil = (nombre, edad, esEstudiante, calificacion) => {
  if (edad < 13) {
    return "Hola " + nombre + ", eres un niño, ¡disfruta tu infancia!";
  }
  else if (edad >= 13 && edad <= 17) {

    if (esEstudiante) {
      if (calificacion >= 8 && calificacion <= 10) {
        return nombre + " es un adolescente y estudiante sobresaliente";
      } else {
        return nombre + " es un adolescente y estudiante,  sigue esforzandote";
      }
    }
    else {
      return nombre + " es un adolescente, que no estudia (NINI) ";
    }
  }
  else if (edad >= 18) {
    if (esEstudiante && calificacion >= 9) {
      return nombre + " es un joven universitario destacado";
    } else if (!esEstudiante) {
      return nombre + " es un adulto en formacion libre";
    } else {
      return nombre + " tiene un perfil no clasificado";
    }
  }
}


/*🧪 Ejercicio 2 – Sistema de control de acceso a evento (Alumno B)
🎯 Instrucciones:
Crea tres funciones flecha:

a. verificarEdad(edad)
Devuelve "menor", "adulto" o "mayor" según:

< 18: menor

18–64: adulto

65+: mayor

b. tieneAcceso(tipoUsuario, tieneInvitacion)
Recibe un tipo de usuario ("VIP", "normal", "especial") y un booleano.

Si es "VIP" o tiene invitación → true

Si es "normal" y no tiene invitación → false

Si es "especial" y mayor de edad → true

c. mostrarResultado(nombre, edad, tipoUsuario, tieneInvitacion)
Usa las dos funciones anteriores para evaluar y mostrar un mensaje como:

"Hola [nombre], como eres un [tipoUsuario] de [edad] años, tu acceso es: PERMITIDO"
o
"Hola [nombre], lo sentimos, no puedes ingresar al evento."

Llama a mostrarResultado() con tus propios datos y muestra el resultado completo.*/

const verificarEdad = (edad) => {
  if (edad < 18) {
    return "menor";
  } else if (edad >= 18 && edad <= 64) {
    return "adulto";
  } else {
    return "adulto mayor";
  }
}

const tieneAcceso = (tipoUsuario, tieneInvitacion, edad) => {
  if (tipoUsuario === "VIP" || tieneInvitacion) {
    return true;
  } if (tipoUsuario === "normal") {
    return false;
  } if (tipoUsuario === "especial" && edad >= 18) {
    return true;
  }
}
const mostrarResultado = (nombre, edad, tipoUsuario, tieneInvitacion) => {
  const acceso = tieneAcceso(tipoUsuario, tieneInvitacion, edad);
  if (acceso) {
    console.log(`Hola ${nombre}, como eres un ${tipoUsuario} de ${edad} años, tu acceso es: PERMITIDO`);
  } else {
    console.log(`Hola ${nombre}, lo sentimos, no puedes ingresar al evento.`);
  }
}

/*🧪 Ejercicio 1 – Sistema de recomendación de comida
🎯 Instrucciones:
Crea una función flecha llamada recomendarComida que reciba 2 parámetros:

horaDelDia 
tieneHambre

La función debe retornar un mensaje según la hora y el hambre:

Si no tiene hambre → "No necesitas comer ahora"
Si tiene hambre:
  Si es entre 6 y 10 → "Desayuna algo ligero"
  Si es entre 12 y 15 → "Es hora de comer"
  Si es entre 18 y 21 → "Hora de cenar"
  En cualquier otro horario → "Come algo ligero o una botana"

Llama a la función con distintos valores y muestra el resultado*/

const recomendarComida0 = (horaDelDia, tieneHambre) => {
  if (!tieneHambre) {
    return "No necesitas comer ahora";
  } if (horaDelDia >= 6 && horaDelDia <= 10) {
    return "Desayuna algo ligero";
  } else if (horaDelDia >= 12 && horaDelDia <= 15) {
    return "Es hora de comer";
  } else if (horaDelDia >= 18 && horaDelDia <= 21) {
    return "Hora de cenar";
  } else {
    return "Come algo ligero o una botana";
  }
}

/*🧪 Ejercicio 2 – Calculadora de descuentos personalizada
🎯 Instrucciones:
Crea una función flecha llamada calcularPrecioFinal que reciba:

precioOriginal 
esClienteFrecuente
cuponActivo 

Lógica del descuento:

Si el usuario es cliente frecuente y tiene cupón → 30% de descuento

Si solo tiene cupón → 20%
Si solo es cliente frecuente → 10%
Si no tiene ninguno → precio completo
La función debe retornar el precio final ya con el descuento aplicado.
Muestra el resultado */

const calcularPrecioFinal = (precioOriginal, esClienteFrecuente, cuponActivo) => {
  let hola = 13;
  console.log(hola);
  if (esClienteFrecuente && cuponActivo) {
    return precioOriginal * 0.7;
  }
  if (cuponActivo) {
    return precioOriginal * 0.8;
  }
  if (esClienteFrecuente) {
    return precioOriginal * 0.9;
  }
  return precioOriginal;
}

/*🧠 Contexto:
Estás programando un sistema que analiza si un soldado Spartan puede entrar a una misión, con qué equipo, qué riesgo corre, y qué resultado probable tendrá.
/*🔧 Funciones a construir (5 arrow functions)
🔹 1. clasificarSpartan(nivel, victorias)
Recibe:
nivel (número del 1 al 100)
victorias (cantidad de misiones ganadas)
Lógica:
Si nivel < 20 → "recluta"
Si nivel >= 20 y < 50 y victorias >= 10 → "operativo"
Si nivel >= 50 y victorias >= 25 → "élite"
Si ninguna condición se cumple → "en entrenamiento"
Retorna: un string con la categoría del Spartan.*/
const clasificarSpartan = (nivel, victorias) => {
  if (nivel < 20) {
    return "recluta";
  } else if (nivel >= 20 && nivel < 50 && victorias >= 10) {
    return "operativo";
  } else if (nivel >= 50 && victorias >= 25) {
    return "elite";
  } else {
    return "en entrenamiento";
  }
}
/*🔹 2. calcularCarga(spartanTipo, armaPrincipal, granadas)
Recibe:
spartanTipo (string: "recluta", "operativo", "élite", etc.
armaPrincipal (string: "rifle", "plasma", "sniper", etc.)
granadas (número)
Lógica:
Si el spartan es "élite" y lleva sniper y más de 3 granadas → "Carga pesada"
Si es "operativo" y lleva rifle → "Carga estándar"
Si es "recluta" o lleva menos de 2 granadas → "Carga ligera"
Si ninguna condición se cumple → "Carga mixta"
Retorna: un string con el tipo de carga.*/
const calcularCarga = (spartanTipo, armaPrincipal, granadas) => {
  if (spartanTipo === "elite" && armaPrincipal === "sniper" && granadas > 3) {
    return "carga pesada";
  } else if (spartanTipo === "operativo" && armaPrincipal === "rifle") {
    return "carga estandar";
  } else if (spartanTipo === "recluta" && granadas < 2) {
    return "carga ligera";
  } else {
    return "carga mixta";
  }
}
/*🔹 3. calcularRiesgo(carga, enemigos, dificultad)
Recibe:
carga (string)
enemigos (número)
dificultad (string: "fácil", "media", "legendaria")
Lógica:
Si hay más de 20 enemigos y la dificultad es "legendaria" → "Misión suicida"
Si enemigos entre 10 y 20 y carga es "Carga ligera" → "Riesgo alto"
Si dificultad es "fácil" y carga es "Carga pesada" → "Riesgo bajo"
Todo lo demás → "Riesgo medio"
Retorna: un string con el nivel de riesgo.*/
const calcularRiesgo = (carga, enemigos, dificultad) => {
  if (enemigos > 20 && dificultad === "legendaria") {
    return "mision suicida";
  } else if (enemigos > 9 && enemigos < 21 && carga === "carga ligera") {
    return "riesgo alto";
  } else if (dificultad === "facil" && carga === "carga pesada") {
    return "riesgo bajo";
  } else {
    return "riesgo medio";
  }
}
/*🔹 4. estimarProbabilidadVictoria(spartanTipo, riesgo)
Recibe:
spartanTipo y riesgo
Lógica:
Si es "élite" y riesgo "bajo" → retorna 90
Si es "operativo" y riesgo "medio" → retorna 70
Si es "recluta" y riesgo "alto" → retorna 30
Si es "en entrenamiento" → retorna 10
Cualquier otro caso → retorna 50
Retorna: un número del 0 al 100 representando la % de victoria.*/
const estimarProbabilidadVictoria = (spartanTipo, riesgo) => {
  if (spartanTipo === "elite" && riesgo === "bajo") {
    return 90;
  } else if (spartanTipo === "operativo" && riesgo === "medio") {
    return 70;
  } else if (spartanTipo === "recluta" && riesgo === "alto") {
    return 30;
  } else if (spartanTipo === "en entrenamiento") {
    return 10;
  } else {
    return 50;
  }
}
/*🔹 5. mostrarResumen(nombre, nivel, victorias, armaPrincipal, granadas, enemigos, dificultad)
Esta es la función principal que:
Llama a las 4 funciones anteriores.
Muestra un resumen en consola con:*/
const mostrarResumen = (nivel, victorias, armaPrincipal, granadas, enemigos, dificultad, riesgo) => {
  const tipo = clasificarSpartan(nivel, victorias);
  const carga = calcularCarga(spartanTipo, armaPrincipal, granadas);
  
  const riesgo = calcularRiesgo(carga, enemigos, dificultad);
  const Victoria = estimarProbabilidadVictoria(spartanTipo, riesgo);
}
//=================================================================================================================
const verificarEdad_ = (edad) => {
  if (edad >= 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
}; //no va a imprimir nada por que aun no se le asigna una edad, simplemente creamos la funcion pero no tiene error

const r = verificarEdad_(20);
if (r >= 18) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
}
// esta bien y va imprimir "Acceso permitido"
//=================================================================================================================
const calcularDescuento = (tipo) => {
  if (tipo === "vip") {
    console.log("Descuento 20%");
  } else if (tipo === "normal") {
    console.log("Descuento 10%");
  } else {
    console.log("Sin descuento");
  }
}; 
const precio = 1000;
const d = calcularDescuento("vip");
const total = precio - (precio * d); 
console.log("Total a pagar:", total);
// no veo errores, y va imprimir "Total a pagar menos el descuento
//=================================================================================================================

const esPar = (n) => {
  console.log(n % 2 === 0);
}; 

const esMayorQueDiez = (n) => {
  return n > 10;
};

if (esPar(12) && esMayorQueDiez(5)) {
  console.log("Condición A");
} else if (esPar(3) || esMayorQueDiez(20)) {
  console.log("Condición B");
} else {
  console.log("Condición C");
}
// se va imprimir Condicion A, no tiene error
//=================================================================================================================
let resultado = "PENDIENTE";

const procesar = () => {
  const interno = "OK";
  console.log("Procesado:", interno);
};

resultado = procesar();

if (resultado === "OK") {
  console.log("Éxito");
} else if (!resultado) {
  console.log("Sin resultado");
} else {
  console.log("Otro estado");
}
// tiene error por que resultado se le asigna un valor que no es booleano por eso no se le puedo poner un NOT logico, y no tiene parametros,
//=================================================================================================================
const promedio = (a, b, c) => {
  if (a >= 0 && b >= 0 && c >= 0) {
    const p = (a + b + c) / 3;
    console.log("Promedio:", p);
    if (p >= 6) {
      console.log("Aprobado");
    } else {
      console.log("Reprobado");
    }
  } else {
    console.log("Datos inválidos");
  }
}; 

const p1 = promedio(6, 6, 6);
const aprobado = p1 >= 6 && true;
if (aprobado) {
  console.log("Certificado emitido");
} else {
  console.log("Certificado no disponible");
}
// el resultado es 6 entonces en true lo que significa que es aprobado y se va imprimir certificado emitido, el codigo no tiene errores 
