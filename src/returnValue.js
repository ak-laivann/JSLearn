// return the value using arrow function

const returnValue = (val) => {
    if (typeof(val)==String){
        return ("\"val\"");
    } else {
        return val;
    }
}
console.log(returnValue("string"));