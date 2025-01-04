// Run the script with `node solution.js`

// import the input file
const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8');

// split the input into an array of numbers
const rows = input.split('\n')

// calculate the safe levels
const result = rows.reduce((acc, row) => {
    const level = rowToNumber(row);
    return isLevelSafe(level) && acc + 1;
}, 0);

console.log('PART 1====================================');
console.log(result);
console.log('====================================');


function rowToNumber(row) {
    const numbers = row.split(' ');
    return numbers.map(number => parseInt(number));
}
// Any two adjacent levels differ by at least one and at most three.
function isDistanceSafe(first, second) {
    const distance = Math.abs(first - second);
    return distance === 1 || distance === 2 || distance === 3;
}

function isLevelSafe(row) {
    const isIncreasing = row.every((number, index) => index === 0 || (number > row[index - 1] && isDistanceSafe(number, row[index - 1])));
    const isDecreasing = row.every((number, index) => index === 0 || (number < row[index - 1] && isDistanceSafe(number, row[index - 1])));

    return isIncreasing || isDecreasing;
}


// Part 2
function isLevelSafeWithProblemDumper(row) {
    if (isLevelSafe(row)) return true;

    console.log(row);

    return row.some((_, index) => {
        const newRow = [...row];
        newRow.splice(index, 1);

        if (isLevelSafe(newRow)) {
            return true;
        } else {
            // console.log(newRow);
        }
    });
}

// console.log(isLevelSafeWithProblemDumper([9, 11, 12, 16, 13]));

// const resultPart2 = rows.reduce((acc, row) => {
//     const level = rowToNumber(row);
//     return isLevelSafeWithProblemDumper(level) && acc + 1;
// }, 0);

console.log('PART 2====================================');
// console.log(resultPart2);
console.log('====================================');

const test = [9, 11, 12, 16, 13, 11];

console.log(test.some((_, index) => {
    const newRow = [...test];


    newRow.splice(index, 1);
    console.log(newRow)

    if (isLevelSafe(newRow)) {
        return true;
    } else {
        // console.log(newRow);
    }
}));
