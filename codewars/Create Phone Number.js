//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
function createPhoneNumber(numbers){
    let countryCode = numbers.slice(0,3).join('')
    let firstPart = numbers.slice(3,6).join('')
    let secondPart = numbers.slice(6,numbers.length).join('')
    return `(${countryCode}) ${firstPart}-${secondPart}`
}