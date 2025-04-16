const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...

//PARTE 1--------------------------------
jedi.edad = 25 // O jedi.edad += 6

console.log(jedi.edad)


//PARTE 2--------------------------------
const leiaOrgana = {nombre: "Leia", apellido: "Organa", edad: 20};

console.log(`Soy ${leiaOrgana.nombre} ${leiaOrgana.apellido}, tengo ${leiaOrgana.edad} años y soy una princesa de Alderaan`)

//PARTE 3---------------------------------
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...

const totalSables = sable1.precio + sable2.precio
console.log(totalSables)


//PARTE 4---------------------------------

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

precioBaseGlobal = 25000

nave1.precioFinal = nave1.precioBase + precioBaseGlobal
nave2.precioFinal = nave2.precioBase + precioBaseGlobal
console.log(nave1.precioFinal)
console.log(nave2.precioFinal)