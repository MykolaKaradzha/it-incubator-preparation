//https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/javascript
function validISBN10(isbn) {
    let isbnArray = isbn.split('');
    if (isbnArray.length === 10) {
        isbn.split('').reduce((acc, number, index) => {
            if (parseInt(number)) {
                acc += number*index
            } else if (number === 'X') {
    } else {
        return false
    }
})
    }}


