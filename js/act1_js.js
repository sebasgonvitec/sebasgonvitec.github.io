// Sebastián González, A01029746
// Karla Mondragón, A01025108

// 1. Escribe una función que encuentre el primer carácter de una cadena de texto que no se repite. 
function repetidos(cadena) {
    let cadenaMin = cadena.toLowerCase()
    for(let i=0; i<cadenaMin.length; i++) {
        let carc = cadenaMin.charAt(i)
        if(cadenaMin.indexOf(carc) == i && cadenaMin.indexOf(carc, i+1) == -1) {
            return carc
        }
    }
    return null
}

// 4. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
function invertirArray (arreglo) {
    let nuevo = []
    for (let i=arreglo.length-1; i>=0; i--)
        nuevo.push(arreglo[i])
    return nuevo;
}

function modArray (arreglo) {
    let nuevo = []
    for(let i=0; i<arreglo.length; i++) 
        nuevo.push(arreglo[i]*2)
    return nuevo
}

// 6. Escribe una función que calcule el máximo común divisor de dos números.
function MaxCD (num1, num2) {
    let numMin = Math.min(num1, num2)
    let MCD = 0
    for(let i=1; i<=numMin; i++) {
        if(num1%i == 0 && num2%i == 0) 
            MCD = i;
    }
    return MCD
}

// 9. Escribe una función que reciba un número, y regrese una lista con todos sus factores. 
function factorizar (num) {
    let factores = []
    for(let i=1; i<=num; i++) {
        if(num%i == 0) 
            factores.push(i)
    }
    return factores
}

// 10. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
function quitaDuplicados (arreglo) {
    return [...new Set(arreglo)]
}

let ar1 = [1, 2, 2, 3, 4]
let ar2 = [6, -1, 7, 5, 17, 1, 7, 5]
let ar3 = [9, 0, -5, 2]
console.log("Arreglos utilizados durante la actividad")
console.log(ar1)
console.log(ar2)
console.log(ar3)

// Pruebas de función repetidos()
console.log("1. Función de repetidos")
console.log(repetidos('abacddbec'))
console.log(repetidos("BbBbAaA"))
console.log(repetidos("osito"))

// Pruebas de funciones de arreglo
    // Pruebas de función invertir arreglo
console.log("4.1 Función de invertir arreglos")
console.log(invertirArray(ar1))
console.log(invertirArray(ar2))
console.log(invertirArray(ar3))
    // Pruebas de función imodificar arreglo
console.log("4.2 Función de modificar arreglos")
console.log(modArray(ar1))
console.log(modArray(ar2))
console.log(modArray(ar3))

// Pruebas de función del Máximo Común Divisor
console.log("6. Función de MCD")
console.log(MaxCD(150, 95))
console.log(MaxCD(18, 24))
console.log(MaxCD(3, 7))

// Pruebas de función de factorizar
console.log("9. Función de Factorizar")
console.log(factorizar(12))
console.log(factorizar(222))
console.log(factorizar(113))

// Pruebas de función de factorizar
console.log("10. Función para quitar duplicados de un arreglo")
console.log(quitaDuplicados(ar1))
console.log(quitaDuplicados(ar2))
console.log(quitaDuplicados(ar3))