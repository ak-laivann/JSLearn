// return true if both add to ten or if one is equal to ten

const bothMakesTen = (a,b) => {
    if (a===10 || b===10) {
        return true;
    } else if (a+b>=10) {
        return true;
    } else {
        return false;
    }
}
console.log(bothMakesTen(1,9));
console.log(bothMakesTen(1,10));
console.log(bothMakesTen(1,7));