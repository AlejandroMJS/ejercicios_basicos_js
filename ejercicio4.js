//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
//4.2 - Coloca en el último lugar de este array a "Cervasio".
//4.3 - Cambia el primer elemento de este array por "Bambina".
//4.4 - Dale la vuelta a este array.
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.


//PRIMERA PARTE
console.log(aldeanos[3])

//SEGUNDA PARTE
aldeanos.push("Cervasio")
console.log(aldeanos)

//TERCERA PARTE
aldeanos.unshift(0)
aldeanos.splice(0, 2, "Bambina")
console.log(aldeanos)

//CUARTA PARTE
console.log(aldeanos.reverse())

//QUINTA PARTE
aldeanos.splice(4, 1, "Canela")
console.log(aldeanos)

//SEXTA PARTE
const last = aldeanos[aldeanos.length-1]
console.log(last)