str = "i am groot"

function removeVowels(str) {
  return str.replace(/[aeiou ]/gi, '');
}
console.log(removeVowels(str))
