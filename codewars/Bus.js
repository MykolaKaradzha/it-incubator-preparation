function countPpl(busStops){
    let peopleCounter = 0;
    for (let bs = 0; bs<busStops.length; bs++) {
        peopleCounter += busStops[bs][0];
        peopleCounter -= busStops[bs][1];
    }
    console.log(peopleCounter);
}
let list = [[10,0],[3,5],[5,8]];
countPpl(list)