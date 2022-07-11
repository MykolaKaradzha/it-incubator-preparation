//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript
function tribonacci(signature,n){
    let newArray = [...signature]
    if (n > 3) {
        for (let i = 0; i < n-3; i++) {
            let newElement = newArray.slice(i, newArray.length+1).reduce((acc,el) => acc + el)
            newArray.push(newElement)
        }
    } else {
        newArray = newArray.slice(0, n)
    }
    return newArray;
}