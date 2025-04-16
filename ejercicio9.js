const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  // Completar código

    let suma = 0

    for (let i = 0; i < numberList.length; i++) {
    const current = numberList[i]

    suma += current
    
  }

  return suma

  

}

const resultado = sumNumbers(numbers)

console.log(`La suma del array es: "${resultado}"`)