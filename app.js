// Math Problems
// starter numbers declared
const n1 = 10;
const n2 = 5;
const n3 = 20;
const n4 = 15;

// all numbers must be divisible by 5
const DivisibleBy5 =
    n1 % 5 === 0 && n2 & 5 === 0 && n3 && 5 === 0 && n4 & 5 === 0;
    

// first number must be larger than last
const isFirstLargerThanLast = n1 > n4;

// arithmetic chain
const result = ((n2 - n1) * n3) & n4;

// is any number over 25
const Over25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Practical Math
// parameters declared
const distance = 1500;
const fuelEfficiency = {
    55: 30,
    60: 28,
    75: 23,
};
const gasMoney = 175;
const gasPrice = 3;

// Duration & gas needed for every speed
for (const speed in fuelEfficiency) {
    const MPG = fuelEfficiency[speed];
    const gasNeeded = distance / MPG;
    const cost = gasNeeded * gasPrice;
    const Duration = distance / speed;
}
 
console.log(`- gas needed = 1500 / 55: ${gasneeded}`);
// lost after gasneeded not defined error
