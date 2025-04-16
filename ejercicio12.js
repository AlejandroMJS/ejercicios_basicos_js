const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    // Completar

    const newList = []

    for (let i = 0; i < list.length; i++) {

        const current = list[i]

        if (!newList.includes(current)) {

            newList.push(current)

        }

    }

    return newList

  }

  const resultado = removeDuplicates(duplicates)

  console.log(resultado)