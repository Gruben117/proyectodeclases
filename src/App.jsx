
/*Arrow Function sin parámetros (10 pts)
Crea una función flecha que no reciba ningún parámetro y que, al llamarse, imprima en consola un saludo como "¡Bienvenido al sistema!".
*/

const saludar = () => {
  console.log("¡Bienvenido al sistema!");
}

/*Arrow Function con parámetros (10 pts)
Crea una función flecha que reciba un nombre como parámetro y muestre en consola:
"Hola, me llamo [nombre]".
*/
const saludarNombre = (nombre) => {
  console.log(`Hola, me llamo ${nombre}`);
}

/*Arrow Function con parámetros y retorno (10 pts)
Crea una función flecha que reciba dos números y retorne su suma.
Luego muestra el resultado en consola.
*/

const sumar = (num_1, num_2) => {
  return num_1 + num_2;
}

/*Evaluador con if, else if y else (15 pts)
Crea una función flecha llamada evaluarNota que reciba una calificación numérica (0 a 10) y muestre:

"Excelente" si es 10

"Muy bien" si es 9 u 8

"Bien" si es 7 o 6

"Reprobado" si es menor a 6
*/
const evaluarNota = (calificacion) => {
  if (calificacion === 10) {
    console.log("Excelente");
  }
  else if (calificacion >= 8 && calificacion <= 9) {
    console.log("Muy bien");
  }
  else if (calificacion >= 6 && calificacion < 8) {
    console.log("Bien");
  }
  else {
    console.log("Reprobado");
  }
}
/*Condicional con operador lógico y comparadores (15 pts)
Crea una función flecha llamada verificarAcceso que reciba dos datos: edad y si tiene ticket (true o false).
Debe mostrar:

"Acceso permitido" si tiene 18 años o más y tiene ticket.

"Acceso denegado" en cualquier otro caso.
*/

const verificarAcceso = (edad, tieneticket = true) => {
  if (edad >= 18 && tieneticket) {
    console.log("Acceso permitido");
  } else {
    console.log("Acceso denegado");
  }
}

/*Arrow function con if anidados y else if (20 pts)
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

const clasificarUsuario = (edad, tieneINE = false, tieneInvitacion = false) => {
  if (edad < 18) {
    console.log("Acceso denegado por edad");
  } else if (edad >= 18 && edad < 21) {
    if (tieneINE) {
      console.log("Acceso limitado");
    } else {
      console.log("Debes presentar identificación");
    }
  } else if (edad >= 21) {
    if (tieneINE || tieneInvitacion) {
      console.log("Acceso completo autorizado");
    } else {
      console.log("No puedes ingresar");
    }
  }
}

/*Evaluador avanzado con varias funciones (20 pts)
Crea las siguientes funciones flecha:

esPar(numero) → retorna true si el número es par

clasificarEdad(edad) → retorna "Niño", "Adolescente" o "Adulto"

evaluarEntrada(edad, tieneTicket, esInvitado) → muestra:

"Entrada especial" si es menor de edad pero está invitado

"Entrada general" si tiene más de 18 y tiene ticket

"Acceso denegado" en cualquier otro caso

Llama a las 3 funciones con valores de prueba y muestra los resultados en consola.
*/



const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-purple-600">¡Que rollo mi Carlos?!</h1>
    </div>
  );
}
export default App;