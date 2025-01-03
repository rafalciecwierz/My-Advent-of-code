const leftSide = [];
const rightSide = [];

// Split the data into two arrays
require('fs').readFileSync('./input.txt', 'utf-8').split('\n').map(line => {
    const [a, b] = line.split('   ')
    leftSide.push(parseInt(a));
    rightSide.push(parseInt(b));
})

// Sorting the arrays
leftSide.sort((a, b) => a - b);
rightSide.sort((a, b) => a - b);


// Calculating the final distance
const finalDistance = leftSide.reduce((acc, curr, index) => {
    acc += Math.abs(curr - rightSide[index]);
    return acc;
}, 0);


console.log('====================================');
console.log(finalDistance);
console.log('====================================');