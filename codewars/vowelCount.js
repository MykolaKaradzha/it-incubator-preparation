// https://www.codewars.com/kata/54ff3102c1bad923760001f3
function getCount(str) {
    let vowelArray = ['a', 'e', 'i', 'o', 'u']
    return str.split('').filter(item => vowelArray.includes(item)).length;
}