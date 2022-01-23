// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
const disemvowel = (str) => {
    let vowelArr = ['a','e','o','u','i', 'A','E','O','U','I',];
    let noVowelArr = str.split('').filter(item => !vowelArr.includes(item))
    return noVowelArr.join('')
}
