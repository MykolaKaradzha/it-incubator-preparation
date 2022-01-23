//https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
function fakeBin(x){
    let y = ''
    for (let i of x) {
        i >=5 ? y+= 1 : y+= 0;
    }
    return y;
}