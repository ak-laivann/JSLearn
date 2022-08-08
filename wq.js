/*
// 1. print max value in array using arrow functions
const maxValue_1 = (arr) => {
    let largest;
    let len = arr.length;
    //console.log(len);
    for ( i = 0; i < len; i++) {
        largest = i ;
        for ( j = i+1; j < len; j++) {
            if (arr[j] > arr[largest]) {
                largest = j;
            }
        }
        [arr[i],arr[largest]] = [arr[largest],arr[i]];
    }
    return arr[0];
}
let outPut_1i = maxValue_1([4000,90,80000,2,234,12,532,1234,641,123,145,6,235,7,5,45,73,2,6,34]);
console.log(outPut_1i); 
*/





/*
// 2. reversing an array using arrow functions
const revArr_1 = (arr) => {
    let len = arr.length;
    var newArr = [];
    for ( i=len-1; i>=0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
let c = [1,234,236,46,67,3,"string","afafn","asgsg",14,4773,4965,"htij"];
let d = console.log(revArr(c));
*/





/*
// 3. multiplying every element by 2 in arrow function
const intoTwo1 = (arr) => {
    let len = arr.length;
    var xTwo1 = [];
    for (i=0; i<len; i++) {
        xTwo1.push(arr[i]*2);
    }
    return xTwo1;
}
let a1 = [2,43,6,13,26,"height",3,14,36,3];
let a2 = console.log(intoTwo1(a1));
*/





/*
// 4. print elements greater than x using arrow functions
const greater_23 = (arr) => {
    let len = arr.length;
    var newGreat1 = [];
    //let x = prompt ("get me another number");
    for ( i=0; i<len; i++) {
        if ( arr[i] > 23) {
            newGreat1.push(arr[i])
        }
    }
    return newGreat1
}
let a3 = [1,12,124,13,164,36,2341,125,36,12,15,342,32,56,125,42,"hello",25345];
let b3 = console.log(greater_23(a3));
*/





/*
// 5. appending each element with a
const appendA = (arr) => {
    let len = arr.length;
    var newAppend1 = [];
    for ( i = 0; i < len; i++) {
        newAppend1.push(arr[i] + 'a')
    }
    return newAppend1;
}
let a5 = ["heaalo","dsfda","asdfsdg","asdgsdg","asdgasdg"];
let b5 = console.log(appendA(a5));
*/





/*
// 6. generation finder
const genFind = ( x , y ) => {
    if ( x === 'm' ) {
        if ( y === -3){
            return ("great grand mother");
        } else if ( y === -2) {
            return ("grand mother");
        } else if ( y === -1) {
            return ("mother");
        } else if ( y === 0) {
           return ("me"); 
        } else if ( y === 1) {
            return ("daughter");
        } else if ( y === 2) {
            return ("grand daughter");
        } else if ( y === 3) {
            return ("great grand daughter")
        } else {
            return ("invalid");
        }
    } else if ( x === 'f' ) {
        if ( y === -3){
            return ("great grand father");
        } else if ( y === -2 ) {
            return ("grand father");
        } else if ( y === -1 ) {
            return ("father");
        } else if ( y === 0 ) {
            return ("me");
        } else if ( y === 1) {
            return ("son");
        } else if ( y === 2) {
            return ("grand son");
        } else if ( y === 3) {
            return ( "great grand son");
        } else {
            return ("invalid");
        }
    }
}
console.log(genFind('m',3));
*/





/* 
// 7. basketball pointers with arrow functions
const bB1 = (x,y) => {
    return ((x*2)+(y*3));
}
console.log(bB1(7,5));
*/





/* 
// 8. addition factorial
const addFact = (num) => {
    let num1 = 0;
    let num2 = 1;
    for ( i=0; i<num; i++) {
        num1 += num2;
        num2 ++
    }
    return num1;
}
console.log(addFact(13));
*/





/* 
// 9. matchstick houses
const msHouse = (num) => {
        return (((num-1)*5)+6);
}
console.log(msHouse(87));
*/





/* 
// 10.converting object into arrays
const objArr = (arr) => {
    return Object.entries(arr);
}
let r = {shrimp:12, tots:20};
console.log(objArr(r));
*/





/* */
// 11. lonely integer
const loneInt = (arr) => {
    let a = 0;
    let b = [];
    for (i=0; i<arr.length-1; i++){
        for ( ;a<i; a++){
            if(arr[a] !== arr[i]){
                b.push(arr[i]);
            }
        }
    }
    return b;
}

let a9 = [1,1,2,2,3,3,4,4,5,5,6];
console.log(loneInt(a9));

