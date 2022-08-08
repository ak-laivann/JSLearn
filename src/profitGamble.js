// return true if the condition for profit is met

const profitGamble = (prob, prize, pay) => {
    if ((prob*prize)>pay) {
        return true;
    } else {
        return false;
    }
}
console.log(profitGamble(0.9,1,2));
