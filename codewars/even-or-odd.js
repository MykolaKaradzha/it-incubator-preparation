function oddOrEven(array) {
    let count = 0
    for (let i in array) {
        count += array[i];
    }
    if (count % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
