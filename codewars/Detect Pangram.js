//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
function isPangram(string){
    let alphabetArray = ("abcdefghijklmnopqrstuvwxyz").split('');
    let charsArray = string.toLowerCase().split('');

    console.log(alphabetArray.every(item => charsArray.includes(item)))
}
isPangram("'The quick brown fox jumps over the lazy dog.")