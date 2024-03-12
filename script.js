/* Encapsulación de código que se va a reutilizar muchas veces */
/* 
    Funciones Regulares
    Funciones Flechas
    Funciones anómimas
*/

/* 
    function -> palabra reservada
    nombreFuncon -> El identificador
    () -> Espacio para parámetros o valores dinámicos
    {} -> código a ejecutar dentro de la función
    function nombreFuncion(){

    }

    Partes de la funcion (Regulares y flecha)
    1 - Declaración o creación de la función
    2 - Llamado de la función
    
    Función declarativa y una función de expresión (Solo para funciones Regulares)
    Una función declarativa es una función que se puede llamar antes de su defición o creación
*/

// calcularSalario()
// function calcularSalario(){
//     let valorHora = Number(prompt('Ingrese el valor de la hora: '))
//     let cantidadHoras = Number(prompt('Ingrese la cantidad de horas: '))
//     let salario = valorHora*cantidadHoras
//     console.log(salario + 'Esto es una función declarativa')
// }
// calcularSalarioNuevo()
// let calcularSalarioNuevo = function(){
//     let valorHora = Number(prompt('Ingrese el valor de la hora: '))
//     let cantidadHoras = Number(prompt('Ingrese la cantidad de horas: '))
//     let salario = valorHora*cantidadHoras
//     console.log(salario + 'Esto es una función de expresión')
// }

// function llamarPrimeraFuncion() {
//   llamarSegundaFuncion();
//   console.log("Primera Función");
// }
// function llamarSegundaFuncion() {
//   console.log("Segunda función");
// }
// function llamarTerceraFuncion() {
//   console.log("Tercera función");
//   llamarPrimeraFuncion();
// }
// llamarTerceraFuncion();

// function mostrarDatosBasicos() {
//   let nombre = "Jaime";
//   var edad = 32;
//   console.log(`Hola ${nombre}`);
//   return edad * 25 + 36 / 8 - 5;
// }
// let resultadoFuncion = mostrarDatosBasicos();
// mostrarDatosBasicos();
// if (resultadoFuncion > 18) {
//   console.log("Es mayor de edad");
// }
let valorHora = Number(prompt("Ingrese el valor de la hora: "));
let cantidadHoras = Number(prompt("Ingres la cantidad de horas"));
function calcularSalarioNeto() {
  let deduccionPension = calcularSalarioBruto() * 0.04;
  let deduccionSalud = calcularSalarioBruto() * 0.04;
  let salarioNeto =
    calcularSalarioBruto() - (deduccionPension + deduccionSalud);
  console.log(
    `Su salario Bruto es de ${calcularSalarioBruto()} del cual se le hizo una deducción de salud por valor de: ${deduccionSalud} y una deducción de pension por valor de ${deduccionPension}. Donde su salario neto es de: ${salarioNeto}`
  );
}
calcularSalarioNeto();
function calcularSalarioBruto() {
  let salario = valorHora * cantidadHoras;
  return salario;
}
