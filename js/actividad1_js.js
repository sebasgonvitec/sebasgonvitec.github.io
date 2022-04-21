//Actividad en clase JavaScript
//Sebastian Gonzalez, A01029746 
//Karla Valeria Mondragon, A01025108

// 1. Caracteres repetidos
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

// 2. Bubble Sort
function bubble_sort(arr, len) {
    for(let i = 0; i < len; i++)
        for(let j = 0; j < len; j++)
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
    return arr
}

// 3. Quick Sort
function change_pos(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function partition(arr, lo, hi){
    let p = lo
    let i = lo+1
    let j = hi
    while(true){
        while(arr[i] <= arr[p] && i<hi)
            i++
        while(arr[j] > arr[p] && j>lo)
            j--
        if(i<j){
            change_pos(arr, i, j)
        }else{
            change_pos(arr, p, j)
            break
        }
    }
    return j
}

function sort_aux(arr, lo, hi){
    if(lo>=hi){
        return
    }
    let posOrdenado = partition(arr, lo, hi);
    sort_aux(arr, lo, posOrdenado-1)
    sort_aux(arr, posOrdenado+1, hi)
}

function quick_sort(arr){
    sort_aux(arr, 0, arr.length-1)
    return arr
}

// 4. Arreglos
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

//5. Usando la definición de clase de Javascript ES6, crea una clase que se llame 'Vector' que represente un vector de 3 dimensiones. La clase debe de poder sumar y restar vectores, obtener su magnitud, obtener el vector unitario, y multiplicar por un escalar.
class Vector {
    constructor(_x, _y, _z){
        this.x = _x
        this.y = _y
        this.z = _z
    }

    sum(vector_sum){
        let temp = new Vector
        temp.x = this.x
        temp.y = this.y
        temp.z = this.z

        temp.x += vector_sum.x
        temp.y += vector_sum.y
        temp.z += vector_sum.z
        return('[' + temp.x + ', ' + temp.y + ', ' + temp.z + ']')

    }

    sub(vector_sub){
        let temp = new Vector
        temp.x = this.x
        temp.y = this.y
        temp.z = this.z
        
        temp.x -= vector_sub.x
        temp.y -= vector_sub.y
        temp.z -= vector_sub.z
        return('[' + temp.x + ', ' + temp.y + ', ' + temp.z + ']')
    }

    magintud(){
        return Math.sqrt((this.x ** 2) + (this.y ** 2) + (this.z ** 2))
    }

    unitary(){
        let temp = new Vector
        temp.x = this.x / this.magintud()
        temp.y = this.y / this.magintud()
        temp.z = this.z / this.magintud()
        return ('[' + temp.x + ', ' + temp.y + ', ' + temp.z + ']')
    }

    mult_scalar(num){
        let temp = new Vector
        temp.x = this.x
        temp.y = this.y
        temp.z = this.z

        temp.x = temp.x * num
        temp.y = temp.y * num
        temp.z = temp.z * num
        return('[' + temp.x + ', ' + temp.y + ', ' + temp.z + ']')
    }

    print_vector(){
        console.log('[' + this.x + ', ' + this.y + ', ' + this.z + ']')
    }
}

// 6. MCD
function MaxCD (num1, num2) {
    let numMin = Math.min(num1, num2)
    let MCD = 0
    for(let i=1; i<=numMin; i++) {
        if(num1%i == 0 && num2%i == 0) 
            MCD = i;
    }
    return MCD
}

// 7. Vectores Ortogonales
function ortogonales(vector_a, vector_b){
    const ppunto = (vector_a.x * vector_b.x) + (vector_a.y * vector_b.y) + (vector_a.z * vector_b.z)
    if(ppunto == 0){
        return true
    } else {
        return false
    }
}

// 8. Hacker Speak
function hacker_speak(chain) {

    arr = Array.from(chain)
    
    for(let i=0; i<arr.length; i++)
        switch (arr[i]) {
            case 'a':
                arr[i] = '4';
            break;
            case 's':
                arr[i] = '5';
            break;
            case 'i':
                arr[i] = '1';
            break;
            case 'e':
                arr[i] = '3';
            break;
            case 'o':
                arr[i] = '0';
            break;
            default:
                arr[i] = arr[i];
            break;
        }
    return arr.join('')
}

// 9. Factores
function factorizar (num) {
    let factores = []
    for(let i=1; i<=num; i++) {
        if(num%i == 0) 
            factores.push(i)
    }
    return factores
}

// 10. Elementos duplicados
function quitaDuplicados (arreglo) {
    return [...new Set(arreglo)]
}

//Function Calls
//Arreglos utilizados
let ar1 = [1, 2, 2, 3, 4]
let ar2 = [6, -1, 7, 5, 17, 1, 7, 5]
let ar3 = [9, 0, -5, 2]
console.log("Arreglos utilizados durante la actividad")
console.log(ar1)
console.log(ar2)
console.log(ar3)

//1. Repetidos
console.log("1. Función de repetidos")
console.log(repetidos('abacddbec'))
document.getElementById("ej1").innerHTML = repetidos('abacddbec')
console.log(repetidos("BbBbAaA"))
console.log(repetidos("osito"))

//2. Bubble Sort
console.log("2. Función Bubble Sort")
console.log(bubble_sort([5, 2, 3, 4], 4))
document.getElementById("ej2").innerHTML = bubble_sort([5, 2, 3, 4], 4)
console.log(bubble_sort([10, 6, 2, 11, 4], 5))
console.log(bubble_sort([5, 2, 3, 4], 4))

//3. Quick Sort
console.log("3. Funcion Quick Sort")
console.log(quick_sort([5, 3, 1, 80, 10]))
document.getElementById("ej3").innerHTML = quick_sort([5, 3, 1, 80, 10])
console.log(quick_sort([2, 1, 10, 9, 7]))
console.log(quick_sort([75, 64, 76, 21]))

//4. Invertir/Modificar arreglos
// Pruebas de función invertir arreglo
console.log("4.1 Función de invertir arreglos")
console.log(invertirArray(ar1))
document.getElementById("ej4").innerHTML = invertirArray(ar1)
console.log(invertirArray(ar2))
console.log(invertirArray(ar3))

// Pruebas de función imodificar arreglo
console.log("4.2 Función de modificar arreglos")
console.log(modArray(ar1))
console.log(modArray(ar2))
console.log(modArray(ar3))

//5. Vector class
console.log("5. Vectores")
let vector1 = new Vector(2, 6, 1)
let vector2 = new Vector(1, 5, 3)
let vector3 = new Vector(5, 2, 1)

console.log(vector1.sum(vector2))
document.getElementById("ej5_sum").innerHTML = (vector1.sum(vector2))

console.log(vector2.sub(vector3))
document.getElementById("ej5_sub").innerHTML = (vector2.sub(vector3))

console.log(vector1.magintud())
document.getElementById("ej5_mag").innerHTML = (vector1.magintud())

console.log(vector1.unitary())
document.getElementById("ej5_uni").innerHTML = (vector1.unitary())

console.log(vector3.mult_scalar(3))
document.getElementById("ej5_scalar").innerHTML = (vector3.mult_scalar(3))

//6. MCD
console.log("6. Función de MCD")
console.log(MaxCD(150, 95))
document.getElementById("ej6").innerHTML = MaxCD(150, 95)
console.log(MaxCD(18, 24))
console.log(MaxCD(3, 7))

//7. Ortogonal?
console.log("7. Función Ortogonales")
let vector_a = new Vector(4, 1, 0)
let vector_b = new Vector(-1, 4, 0)

console.log(ortogonales(vector_a, vector_b))
document.getElementById("ej7").innerHTML = ortogonales(vector_a, vector_b)

//8. Hacker Speak
console.log("8. Función Hacker Speak")
console.log(hacker_speak("Javascript es divertido"));

document.getElementById("submit_ej8").onclick = function(){
    const text_chain = document.getElementById("chain_ej8").value;
    document.getElementById("ans_ej8").innerHTML = hacker_speak(text_chain);
}

//9. Factorizar
console.log("9. Función de Factorizar")
console.log(factorizar(12))
document.getElementById("ej9").innerHTML = factorizar(12)
console.log(factorizar(222))
console.log(factorizar(113))

//10. Duplicados
console.log("10. Función para quitar duplicados de un arreglo")
console.log(quitaDuplicados(ar1))
document.getElementById("ej10").innerHTML = quitaDuplicados(ar1)
console.log(quitaDuplicados(ar2))
console.log(quitaDuplicados(ar3))