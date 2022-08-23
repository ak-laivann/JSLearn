
// -------------------- bubbling -------------------

/* 

    bubbling is the process or event or the nostalgic word 'phenomenon' wherein the 

    functions or elements inside another gets called giving importance to the inner functions 
    
    or elements... like in calling the chid functions first and thenn the respective parents...

    capturing is the opposite wherein the calling is in reverse of bubbling event

*/


// function childLis () {
//     console.log("child Clicked");
// };

// function parentLis () {
//     console.log("parent Clicked");
// };

// function gpLis () {
//     console.log("grandParent Clicked");
// };

// --------------- capturing ----------------

// for capturing we need to be using a eventListener and set a third value in the bracket to true..

// so need to remove the onClick function from the div element

// function childLis () {
//     console.log("child Clicked");
// };
    
// function parentLis () {
//     console.log("parent Clicked");
// };
    
// function gpLis () {
//     console.log("grandParent Clicked");
// };

// const ele1 = document.getElementById("child");
//  ele1.addEventListener("click", childLis);

// const ele2 = document.getElementById("parent");
//  ele2.addEventListener("click", parentLis);

// const ele3 = document.getElementById("grandparent");
//  ele3.addEventListener("click", gpLis);

// ------------ scopes --------------

// let arr = [2,3,4,5]
// const arr = [2,3,4,5,6]
// arr.push(7);
// console.log(arr);

// // let a = 0;
// const a = 0;
// a = 3;
// console.log(a)

// ---------- hoisting -------------

// hoisting is the process of assigning a value to a variable without even declaring

// like a = 0 and not let a = 0;

// and the hoisting acts like let variable

// a=10;
// a=50;
// console.log(a);

// arrow
// const helloFive = () => {
//     for (i=0; i<5; i++) {
//         console.log("hello")
//     }
//     console.log(i);
// }

// helloFive();

// --------- lexical scope ----------------

// lexical scope is using a variable inside a function wherein the variable was already outside the function

// let a = 5;

// function sum () {
//     let b = 10;
//     console.log(a+b)
// }

// sum();

// -------------- closure -------------

// closure is using a variable from the outside function and using them inside a inside function
