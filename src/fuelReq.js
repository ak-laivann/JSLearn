// return the amount of fuel required for conditions

const fuelReq = (val) => {
    if ((val*10)<100) {
        return (100);
    } else {
        return (val*10);
    }
}

console.log(fuelReq(9));
console.log(fuelReq(30));