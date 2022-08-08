// gets a sequence of number - first for chickens - second for cows - third for pigs

const numOfLegs = (a,b,c) => {
    answer = [];
    answer.push((a*2) + (b*4) + (c*4));
    return answer;
}
console.log(numOfLegs(2,3,5));