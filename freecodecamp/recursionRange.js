//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
function rangeOfNumbers(startNum, endNum) {
    if (endNum <= startNum) {
        return [startNum];
    } else {
        const arr = rangeOfNumbers(startNum, endNum-1)
        arr.push(endNum);
        return arr;
    }


};
rangeOfNumbers(3, 6)