function getMiddle(s) {
    let chars = s.split('');
    console.log((chars.length % 2 === 0 ? chars.slice(chars.length/2-1, chars.length/2+1)
        :chars.slice(chars.length/2, chars.length/2+1)).join(''))
}
getMiddle("test")