console.log("Hola Todos");

// Tipos de datos
// undefined
let welcome;
console.log(welcome);
// boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue)
// number
let numero1 = 1;
console.log(numero1);
// string
welcome = "Hola a todos bienvenidos a Codigo para todos"
console.log(welcome)
// symbols

let symbol1= Symbol("Este es un simbolo");
let symbol2= Symbol("Este es un simbolo");

console.log(symbol1);
console.log(symbol1==symbol2);

// Tipos de estructuras
// objetos
let persona = {
    nombre:"Alexis",
    apellido:"Matamoros",
    edad:24
}
console.log(persona);

// funciones
function suma(numero1,numero2){
     return numero1 + numero2;
}
//Funcion como expresion
const suma2= function(numero1,numero2){
    return numero1 + numero2;
} 
//Funcion de flecha(Arrow Function)
const suma3= (numero1,numero2) => {
    return numero1 + numero2;
} 

console.log(suma(3,4))
console.log(suma2(3,4))
console.log(suma3(3,4))