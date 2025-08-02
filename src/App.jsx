
function App() {
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
  const parametro = (nombre) => {
    console.log("hola me llamo, ${nombre}");
  }
  


  /*3. Arrow Function con parámetros y retorno
  Crea una función flecha que reciba dos números y retorne su suma.
Luego muestra el resultado en consola.
*/
  const sumar = (a,b) => a+b;
  const resultado = sumar(18,90);
  console.log("la suma es: + {resultado}");

  /*4. Evaluador con if, else if y else
  crea una función flecha llamada evaluarNota que reciba una calificación numérica (0 a 10) y muestre:

"Excelente" si es 10

"Muy bien" si es 9 u 8

"Bien" si es 7 o 6

"Reprobado" si es menor a 6
*/
  const evaluarNota = (calificacion) => {
    if (calificacion === 10) {
      console.log("exelente");
    } else if(calificacion === 9 && calificacion === 8) {
      console.log("muy bien");
    } else if(calificacion === 7 && calificacion === 6) {
      console.log("bien");
    } else if(calificacion <=6) {
      console.log("reprobado");
    }
  }
  

  /*5.  Condicional con operador lógico y comparadores 
  Crea una función flecha llamada verificarAcceso que reciba dos datos: edad y si tiene ticket (true o false).
Debe mostrar:

"Acceso permitido" si tiene 18 años o más y tiene ticket.

"Acceso denegado" en cualquier otro caso.
  */
  const verificarAcceso = (edad, tieneTicket) => {
    if(edad >=18 && tieneTicket) {
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
const clasificarUsuario = (edad , INE , invitacion) => {
if(edad <18){
  console.log("acceso denegado por edad");
} else if (edad>=18 && edad <21 && INE){
  console.log("acceso limitado")
} else if (edad>=18 && edad <21 && !INE){
console.log("debes presentar indentificacion")}
 if(edad>=21 || INE || invitacion){
  console.log("acceso completo autorizado");
} else {
  console.log("no puedes ingresar")
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
const esPar = {} //no sabia como hacerlo




const clasificarEdad = (edad) => {
  if(edad <13){
    return "nino";
  } else if(edad >13 && edad <18) {
    return "adolescente";
  } else {
  return "adulto";
  }
}

const evaluarEntrada =(edad, tieneTicket,esInvitado) => {
  if(edad <18 && esInvitado) {
    console.log("si es menor de edad pero esta invitado");
  } else if(edad>=18 && tieneTicket) {
    console.log("si tiene mas de 18 y tiene ticket");
  } else {
    console.log("acceso denegado");
  }
}
  
}
export default App;