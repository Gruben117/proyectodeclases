const verificarEdad = (edad) => {
  if (edad >= 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
};

const r = verificarEdad(20);
if (r >= 18) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado");
};
//va a imprimir mayor de edad, y acceso permitido, no tiene error
/*----------------------------------------------------------------------------------------
*/

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
//va a imprimir descuento del 20%, y no tiene errores 
/*-------------------------------------------------------------------------------------
*/

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
//se va a imprimir la condicion a 
/*----------------------------------------------------------------------------------
*/

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
//va a imprimir exito porque el valor es ok 
/*------------------------------------------------------------------------------
*/

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
//el promedio es aprovatorio, el certificado es emitido 
/*---------------------------------------------------------------------------------
*/


const App = () => {



mostrarResumen (nombre, nivel, victorias, armaPrincipal, granadas, enemigos, dificultad);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-purple-600">¡Que rollo mi Carlos?!</h1>
    </div>
  );
}
export default App;