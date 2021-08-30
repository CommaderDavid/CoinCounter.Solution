function counter(numberToDivide) {
    return function (total) {
        return Math.trunc(total / numberToDivide);
    }
}

const pennyCounter = counter(1);
const nickleCounter = counter(5);
const dimeCounter = counter(10);
const quarterCounter = counter(25);

console.log(pennyCounter(173))
console.log(nickleCounter(173))
console.log(dimeCounter(173))
console.log(quarterCounter(173))