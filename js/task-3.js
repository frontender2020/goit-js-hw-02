const findLongestWord = function(string) {
  const stringSplit = string.split(" ");

  let wordLength = 0;
  let longestWord = 0;
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i].length > wordLength) {
      wordLength = stringSplit[i].length;

      longestWord = stringSplit[i];
    }
  }

  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
