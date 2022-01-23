// https://www.codewars.com/kata/595970246c9b8fa0a8000086/train/javascript
function capitalizeWord(word) {
    let bigLetter = word[0].toUpperCase();
    let newWord = word[0].toUpperCase() + word.slice(1, word.length)
    return newWord;
}