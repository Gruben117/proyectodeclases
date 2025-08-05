
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
    return "Hola" + nombre + ",eres un niño, ¡disfruta tu infancia!";
  } else if (edad >= 13 && edad <= 17 && esEstudiante) {
    if (calificacion >= 8 && calificacion <= 10) {
      return "Adolescente sobresaliente";
    } else {
      return "Adolescente, sigue esforzandote";
    }
  } if (edad >= 18) {
    if (esEstudiante && calificacion >= 9) {
      return "Joven universitario destacado";
    } else if (!esEstudiante) {
      return "Adulto en formacion libre";
    } else {
      return "Perfil no clasificado";
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
    return "mayor";
  }
}

const tieneAcceso = (tipoUsuario, tieneInvitacion, VIP, normal, especial) => {
  if (VIP || tieneInvitacion) {
    return true; 
  } else if (normal && !tieneInvitacion) {
    return false;
  } else if (especial && edad >=18) {
    return true;
  }
}

const mostrarResultado = (nombre, edad, tipoUsuario, tieneInvitacion) => {
  `Hola ${nombre} como eres un ${tipoUsuario} de  ${edad} años, tu acceso es: PERMITIDO`
  `Hola ${nombre},lo sentimos, no puedes ingresar al evento.` 
  
  //aqui ya no le entedi

}


const App = () => {

  evaluarPerfil("Carlos",12,false,10);


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-purple-600">¡Que rollo mi Carlos?!</h1>
    </div>
  );
}
export default App;