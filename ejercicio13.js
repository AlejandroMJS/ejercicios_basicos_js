const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList) {
    // Completar

    const nameToFind = "Tony"
  
    for (let i = 0; i < nameList.length; i++) {

      if (nameList[i] === nameToFind) {
        return { found: true, position: i }

      }
    }
  
    return false
  }
  
  const resultado = nameFinder(names)

  console.log(resultado)
