function findNeedle(haystack) {
    for (let i in haystack) {
        if (haystack[i] === "needle") {return `found the needle at position ${i}`}
    }
}