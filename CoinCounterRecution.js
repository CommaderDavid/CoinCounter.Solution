const returnChange = (int, pennyCount, nickelCount, dimeCount, quarterCount) => {
    console.log(int)
    if (int < 1) {
        return [pennyCount, nickelCount, dimeCount, quarterCount];
    } else if (int >= 25) {
        return returnChange(int -= 25, pennyCount, nickelCount, dimeCount, quarterCount + 1);
    } else if (int >= 10) {
        return returnChange(int -= 10, pennyCount, nickelCount, dimeCount + 1, quarterCount);
    } else if (int >= 5) {
        return returnChange(int -= 5, pennyCount, nickelCount + 1, dimeCount, quarterCount);
    } else if (int >= 1) {
        return returnChange(int -= 1, pennyCount + 1, nickelCount, dimeCount, quarterCount);
    }
    // console.log(quarterCount);
    // console.log(dimeCount);
    // console.log(nickelCount);
    // console.log(pennyCount);
};

console.log(returnChange(376, 0, 0, 0, 0));

// let pennyCount = 0;
// let nickelCount = 0;
// let dimeCount = 0;
// let quarterCount = 0;

