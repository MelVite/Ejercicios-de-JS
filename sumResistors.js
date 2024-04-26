/**
 * 1. Calculate the sum of all resistors connected in series.
 * Examples:
 * - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
 * - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
 * - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
 * 
 * Note: This approach uses the absolute value of each resistance to ensure all values are positive.

 */
console.log("Hola");

//Preparar las constantes 
const res1 = [-1, 5, 6, 3]; 
const res2 = [14, 3.5, 6];
const res3 = [8, 15, 100];


//Definir nuestra función 
function sumResistance(arr) { //la función toma el parámetro 'arr' que se espera que sea un array de los valores de resistencia
    //se inializan dos variables locales dentro de la función
    const arr2 = []; //array para almacenar los valores absolutos de las resistencias, [] es un constructor de matrices
    let res = 0; //suma de las resistencias, inicia en 0

    //iteración
    arr.forEach((e) => arr2.push(Math.abs(e)));
        /**
         * el '.' permite acceder a las propiedades del objeto arr
         * forEach itera sobre cada elemento e del array, proporciona una forma sencilla y legible de iterar sobre los elementos de un arreglo sin necesidad de utilizar un bucle for explícito.
         * => función de flecha o arrow
         * La función es la siguiente:
         * 1. Math.abs(e): Toma el valor absoluto de e. La función Math.abs() devuelve el valor absoluto de un número.
         * 2. arr2.push(...): Agrega el valor absoluto de e al arreglo arr2. La función push() se utiliza para agregar uno o más elementos al final de un arreglo.
         */ 
    arr2.forEach((e) => (res = res + e));
        /**
         * Para cada elemento del arreglo arr2 se suma cada uno de estos valores al resultado res.
         */
    console.log(`${res} ohms`);   
}

sumResistance(res1);
sumResistance(res2);
sumResistance(res3);

//resolviendo con for
function sumResistance2(arr) {
    let res = 0;

    //Se inicia un bucle for que recorre cada elemento del array arr. La variable i se inicializa en 0, y el bucle se ejecutará mientras i sea menor que la longitud del array arr.
    for (let i = 0; i < arr.length; i++) {
        res += Math.abs(arr[i]); //En cada iteración del bucle, se agrega al valor de res el valor absoluto del elemento en la posición i del array arr. Esto se hace usando Math.abs(arr[i]).
    }
    return res; //Después de que el bucle ha recorrido todos los elementos del array arr y ha sumado los valores absolutos de las resistencias, la función retorna el valor total de la suma.
}
console.log(sumResistance2(res1) + " ohms");
console.log(sumResistance2(res2) + " ohms");
console.log(sumResistance2(res3) + " ohms");