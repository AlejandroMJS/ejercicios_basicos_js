const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  let longest = '';

  for (let i = 0; i < stringList.length; i++) {
    const current = stringList[i];
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

const resultado = findLongestWord(avengers);
console.log(`La palabra más larga es: "${resultado}"`);
