/*jercicio 1 – Evaluador de perfil de usuario (Alumno A)
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

Llama a la función con tus propios datos y muestra el resultado en consola.
*/

const evaluarPerfil = (nombre, edad, esEstudiante, calificacion) => {
  if (edad < 13) {
    return "Hola" + nombre + ",eres un niño, ¡disfruta tu infancia!";
  }
  else if (edad >= 13 && edad <= 17 && esEstudiante) {
    if (calificacion >= 8) {
      return "Adolecente sobresaliente";
    }
    else {
      return "Adolocente sigue esforzandote";
    }
  }
  if (edad >= 18) {
    if (esEstudiante && calificacion >= 9) {
      return "Joven unniversitario destacado";
    }
    else if (!esEstudiante) {
      return "Adulto en formacion libre";
    } else {
    } return "Perfil no clasificado";
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

Llama a mostrarResultado() con tus propios datos y muestra el resultado completo.
*/

const verificarEdad = (edad) => {
  if (edad < 18) {
    return "menor";
  }
  else if (edad >= 18 && edad <= 64) {
    return "adulto";
  }
  else if (edad >= 65) {
    return "mayor";
  }
}
{
  const tieneAcceso = (tipoUsuario, tieneInvitacion) => {
    if (tipoUsuario === "VIP" || tieneInvitacion) {
      return true;
    }
    else if (tipoUsuario === "normal" && !tieneInvitacion) {
      return false;
    }
    else if (tipoUsuario === "especial" && edad >= 65) {
      return true;

    }
  }
}
{
  const mostrarResultado = (nombre, edad, tipoUsuario, tieneInvitacion) => {
    const edadVerificada = verificarEdad(edad);
    const acceso = tieneAcceso(tipoUsuario, tieneInvitacion);
    if (acceso) {
      return "Hola" + nombre + ", como eres un" + tipoUsuario + "de" + edadVerificada + "años, tu acceso es PERMITIDO";
    }
    else {
      return "Hola" + nombre + ", lo sentimos, no puedes ingressar al evento";
    }
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

Llama a la función con distintos valores y muestra el resultado
*/

const recomendarComida = (horaDelDia, tieneHambre) => {
  if (!tieneHambre) {
    return ("No necesita comer ahora");
  }
  else if (horaDelDia >= 6 && horaDelHambre <= 10) {
    return ("Desayuna algo ligero ");
  }
  else if (horaDelDia >= 12 && horaDelDia <= 15) {
    return ("Es hora de comer");
  }
  else if (horaDelDia >= 18 && horaDelDia <= 21) {
    return ("Hora de cenar");
  }
  else {
    return ("Come algo ligero o una boatana");
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
Muestra el resultado
*/

const calcularPrecioFinal = (precioOriginal, esClienteFrecuente, cuponActivo) => {
  let descuento = 0;

  if (esClinteFrecunte && cuponActivo) {
    descuento = 0.3;
  }
  else if (cuponActivo) {
    descuento = 0.2;
  }
  else if (esClienteFrecuente) {
    descuento = 0.1;
  }
  else {
    descuento = 0;
  }// ya de aqui no se como hacerle 
}



const App = () => {



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-purple-600">¡Que rollo mi Carlos?!</h1>
    </div>
  );
}
export default App;