const toys = [
    {id: 5, name: 'Transformers'}, 
    {id: 11, name: 'LEGO'}, 
    {id: 23, name: 'Hot Wheels'}, 
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

const newArray = []
const filteredArray = []

for (const toy of toys) {

    if (toy.name.includes("gato")) {
        newArray.push(toy)
      }

      
    
}

console.log(newArray) //Array que incluye la palabra gato

for (const toy of toys) {

    if (!toy.name.includes("gato")) {
        filteredArray.push(toy)
      }

      
    
}


console.log(filteredArray) //Array que no incluye la palabra gato