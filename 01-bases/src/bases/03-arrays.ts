export const numberArray = [1,2,3,4,5];
const numberArrayC = [1,2,3] as const;

numberArray.push(6);

const numberArray2 = [...numberArray];
numberArray2.push(7);

console.log(numberArray, numberArrayC, numberArray2);