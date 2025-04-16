const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ]
  function repeatCounter(list) {
    // Completar

    const counts = {}

  for (let i = 0; i < list.length; i++) {

    const current = list[i]

    if (counts[current]) {
      counts[current]++
    } else {
      counts[current] = 1
    }
  }

  return counts;
}

const resultado = repeatCounter(words)

console.log(resultado)