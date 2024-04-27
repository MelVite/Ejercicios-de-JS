/**
 * Array de Múltiplos
 * 
 * Crea una función que tome dos parámetros (número, longitud) y devuelva un array de longitud que contenga múltiplos del número
 * Ejemplos:
 * arrayMultiplos(2, 10) debería devolver [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].
 * arrayMultiplos(17, 6) debería devolver [17, 34, 51, 68, 85, 102].
 */



function arrayMultiplos(num, long) { //Se define la función que tiene los parámetros num -> el número del cuál se generará los múltiplos y long -> para la longitud de array de salida 
    let multiplos = [];
    for (let i = 1; i <= long; i++) {
      multiplos.push(num * i);
    }
      /**
       * Se inicia el bucle for que itera desde i=1 hasta long
       * En cada iteración del bucle se calcula el múltiplo de num multi´plicandolo por i y luego se agraga al array multiplos
       */
    return multiplos; //se llama a la función
  }

  console.log(arrayMultiplos(2, 10)); 
