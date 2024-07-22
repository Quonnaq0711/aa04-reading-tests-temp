function isFive(num) {
    if(num === 5){
        return true;
    }
    else  {
        return false;
    }
}

num1 = 5;
const compare = isFive(num1) //true
num2 = 4;
const compare2 = isFive(num2) //false
other = 'not 5';
const compare3 = isFive(other) //false
console.log(isFive(num1));
console.log(isFive(num2));
console.log(isFive(other));






function isOdd(number) {
    if (typeof number !== 'number') {
      throw new Error('Input must be  number');
    }
    return number % 2 !== 0;
  }








function myRange(min,max,step = 1) {
  const result = [];

  if(min > max) return [];
 
    if (step > 0) {
      for (let i = min; i <= max; i += step) {
        result.push(i);
      }
    }
    return result;
}

const range = [0,5];
console.log(myRange(range)); // [0,1,2,3,4,5];
const range2 = [0,5,2];
console.log(myRange(range2)); // [0, 2, 4];
  


