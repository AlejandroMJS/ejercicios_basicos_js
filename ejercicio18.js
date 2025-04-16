const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]


const filteredPlaces = []

for (let i = 0; i < placesToTravel.length; i++) {

  const current = placesToTravel[i]

  if (current.id !== 11 && current.id !== 40) {
    filteredPlaces.push(current)
  }
}

console.log(filteredPlaces)

