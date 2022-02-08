//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(str) {
    let wordsArray = str.split(' ');
    console.log(wordsArray.map(word => word
        .split('')
        .reverse()
        .join(''))
        .join(' ')
    )
}
reverseWords("This is an example!")