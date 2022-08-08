// user gives a number and an array should be created till the number

const arrTillNum = (num) => {
    let arr = [];
    for (i=0; i<=num; i++){
        arr.push(i);
    }
    return arr;
}

console.log(arrTillNum(4));