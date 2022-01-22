const cannonsReady = (gunners) => {
    let count = 0
    for (let prop in gunners) {
        if (gunners[prop] === "aye") {
            count = 1;
        }
        else {
            return "Shiver me timbers!";
        }
    }
    if (count == 1) {
        return "Fire!"
    }
}