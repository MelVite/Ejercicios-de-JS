/**
 * Promedio Antipodal
 * Dado un array, devuelve un array más corto siguiendo estos pasos:
 * 
 * Divide el array en dos partes iguales*. Si son desiguales, elimina el elemento del medio para obtener dos arrays iguales.
 * Suma cada número de la primera parte con los números inversos de la segunda parte.
 * Divide cada número del array resultante por 2.
 * 
 * Ejemplo:
 * Para el array [1,2,3,5,22,6], el resultado debería ser [3.5, 12, 4].
 */

//Definir nuestra constante
const miMatriz = [1, 2, 3, 5, 22, 6, 10];

function promedioAnti(arr) {
    //
    const mitadArray = Math.floor(arr.length / 2); // Math.floor es una función que devuelve el número entero redondeado a su entero más cercano (en este caso al ser par o inpar se redondea hacia abajo)

    //Determinar si la longitud del array es inpar
    const inparArray = arr.length % 2 !==0;

    //División del array en dos partes 
    /**
     * slice es un método que extrae una porción de elementos y los devuelve como un nuevo array o cadena. Para arrays toma dos arumentos que reprenta los índices de inicio y final(el final no es tomado en el nuevo acomodo)
     * 
     */
    let primeraParte = arr.slice(0, mitadArray);
    let segundaParte = arr.slice(mitadArray);


    if (inparArray) {
        segundaParte = segundaParte.slice(1);
    }

    //Invertir el segundo array creado. Se utiliza .reverse() ya que es el método que invierte el orden de los elementos de un array
    segundaParte = segundaParte.reverse();

    //Suma de cada los elementos entre ambas array
    let sumaArray = [];
    for (let i = 0; i < primeraParte.length; i++) {
        sumaArray.push(primeraParte[i] + (segundaParte[i]));
    }

    //Divide cada número del array resultante por 2
    let divArray = [];
    sumaArray.forEach(num => { divArray.push(num / 2)});

    return divArray;

}
console.log(promedioAnti(miMatriz));


  
  






