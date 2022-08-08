// return the greater num

const greaterNum = (a,b) => {
    if (a>b) {
        return (a);
    } else if (b>a) {
        return (b);
    } else {
        return undefined;
    }
}

console.log(greaterNum(3,4));
console.log(greaterNum(-1,0));