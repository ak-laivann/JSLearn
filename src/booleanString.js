// take input of boolean and return the value as string

const booleanString = (value) => {
    if(Boolean(value===true)){
        return ("\"True\"");
    } else if (Boolean(value===false)) {
        return ("\"False\"");
    } else {
        return "undefined";
    }
}
console.log(booleanString(false));