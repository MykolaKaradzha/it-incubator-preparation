//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string){
    let alphabetArray = ("abcdefghijklmnopqrstuvwxyz").split('');
    let charsArray = string.toLowerCase().split('');
    let filteredArray = charsArray.filter(char => alphabetArray.includes(char));
    let sortedArray = filteredArray.sort();
    console.log(charsArray)
    console.log(filteredArray)
    console.log(alphabetArray.every(item => sortedArray.includes(item)))
}
isPangram("'The quick brown fox jumps over the lazy dog.")