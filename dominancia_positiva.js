
/**
 * Dominancia positiva en Array
 * Escribe una función para determinar si un array es positivamente dominante. Un array es positivamente dominante cuando la mayoría de sus elementos son positivos.
 * Ejemplo:
 * positiveDom([-1, -3, -5, 4, 6767]) debería devolver false.
 */

//Definimos la constante
const arreglo = [-1, -3, -5, 4, 6767];

function positiveDom(arr) {
    // Contadores para llevar el seguimiento de los números positivos y negativos
    let positive = 0;
    let negative = 0;

    // Iteración sobre el array y contar los números positivos y negativos
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        }
    }

    // Condicional para que los elementos sean postivos 
    if (positive > negative) {
        return true;
    } else {
        return false;
    }
}

console.log(positiveDom(arreglo))

