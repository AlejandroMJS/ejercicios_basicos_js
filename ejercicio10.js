const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
   // Completar
    let suma = 0
    for (let i = 0; i < numberList.length; i++) {

        const current = numberList[i]
        suma += current
    }
    return suma / numberList.length
}

const resultado =  average(numbers)
console.log(`El promedio es: "${resultado}"`)