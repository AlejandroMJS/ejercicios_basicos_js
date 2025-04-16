const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  // Completar
    let numberSum = 0
    let numberCount = 0

    let stringLengthSum = 0
    let stringCount = 0


    for (let i = 0; i < list.length; i++) {

        const current = list[i]
        
        if (typeof current === "number") {

            numberSum += current
            numberCount++
        }

        else if (typeof current === "string") {

            stringLengthSum += current.length
            stringCount++
        }
    }

       let numberAverage

    if (numberCount > 0) {
    numberAverage = numberSum / numberCount

    } else {
    numberAverage = 0
    }

    let stringAverage
    
    if (stringCount > 0) {
    stringAverage = stringLengthSum / stringCount
    } else {
    stringAverage = 0
    }

    return {promedioNumeros :  numberAverage, promedioStrings: stringAverage}

}

const resultado = averageWord(mixedElements)

console.log(`El promedio de los números es: ${resultado.promedioNumeros} y el promedio de la longitud del string es: ${resultado.promedioStrings}`)