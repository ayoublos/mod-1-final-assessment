/**
 * Returns an array containing only the words from the input array that start with a capital letter.
 * @param {string[]} stringsArray - An array of strings.
 * @returns {string[]} - An array of strings containing words starting with a capital letter.
 * @example
 * wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"])
 * // Returns: ["Apple", "Cat"]
 */
function wordsStartingWithCapital(array) {
  
  if(Array.isArray(array)){
    return array.filter(el=>el[0].toUpperCase()===el[0]);
  }

}
console.log(wordsStartingWithCapital(["Apple", "banana", "Cat", "dog"]))

/**
 * Calculates the sum of all odd numbers greater than 10 in the given array.
 * @param {number[]} numbersArray - An array of numbers.
 * @returns {number} - The sum of all odd numbers greater than 10.
 * @example
 * sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20])
 * // Returns: 28
 */
function sumOfOddNumbersGreaterThanTen(array) {

  if(array){

    return array.filter((element)=>element%2!==0&&element>10).reduce((acc,cur)=>acc+cur,0)
  
  }

}

console.log(sumOfOddNumbersGreaterThanTen([5, 15, 10, 13, 20]))

/**
 * Returns an object containing a count of how many letters are in each word in the given sentence.
 * @param {string} sentence - A string representing a sentence.
 * @returns {Object.<string, number>} - An object where keys are words and values are the counts of letters in each word.
 * @example
 * countLettersInEachWord("The quick brown fox")
 * // Returns: { "The": 3, "quick": 5, "brown": 5, "fox": 3 }
 */
function countLettersInEachWord(string) {

  let obj={}

  if(string){

    let arrayOfWords= string.split(` `);

    for(let word of arrayOfWords ){

      obj[word]=word.length;
    }
  }
  return obj;

}
console.log(countLettersInEachWord("The quick brown fox"))

module.exports = {
  wordsStartingWithCapital,
  sumOfOddNumbersGreaterThanTen,
  countLettersInEachWord,
};
