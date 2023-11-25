// es un objeto que nos servira para guardar una coleccion de información

let bebidas = ["agua", "refresco", "alcohol"];
let comida = ["papas", "hamburguesa", "pizza"];

// inmutable
const bebidasycomida = bebidas.concat(comida);

showDom("array2", bebidasycomida);
showDom("array1", bebidas);

function show(arr){
    for(let i=0 ; i<arr.length ; i++){
        console.log(arr[i]);        /* nos muestra el contenido de nuesta arrays */
    }
}

function showDom(element, arr) {
    document.getElementById(element).innerHTML = "";
    
    for(let i=0 ; i<arr.length ; i++){
        document.getElementById(element).innerHTML += 
            `<div>${arr[i]}</div>`;
    }
}
// for(let i=numbers.length -1 ; i>=0 ; i--){
//     console.log(numbers[i]);        /* nos muestra el contenido de nuesta arrays del ultimo al primero */
// }

// console.log(numbers[numbers.length - 1]); /*esto hace que siempre nos dará el ultimo elemento*/
// console.log(numbers.length); /* length es una propiedad nos dice la longitud de nuestro array */
// console.log(numbers.at(-2)); /*nos deja utilizar numeros negativos para referirnos a los ultimos elementos */

// mutable
// bebidas.push("cafe");           /* agregar algo al final del array*/
// bebidas.unshift("limonada");    /* agregar algo al inciio */
// bebidas.splice(2, 0, "leche");  /* agregar elementos, el primer numero es donde quedarpa en el array, el segundo para eleminar elementos */

// let b = bebidas.pop();         /* elimina un valor y luego lo devuelve*/
// let b2 = bebidas.shift();
// console.log(b);
// console.log(b2);