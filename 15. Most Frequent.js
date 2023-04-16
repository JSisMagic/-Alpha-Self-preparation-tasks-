const input = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let numberOfElements = Number(gets());
let numbersArray = [];
while (numberOfElements !== 0) {
    let number = Number(gets());
    numbersArray.push(number);
    numberOfElements--;
}
numbersArray.sort(function(a, b){return a - b});
let count = 1;
let maxCount = 1;
let mostFrequent = 0;
for (let i = 0; i < numbersArray.length; i++) {
    
    if (numbersArray[i] === numbersArray[i+1]) {
        count++;
       
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = numbersArray[i];
        }
        
    }
    else
            count = 1;
    }

print(mostFrequent + " (" + maxCount + " times)");






// Another solution 

/*

const input = ['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const N = +gets();
const arrN = [];
let arrNSorted = [];
let count = 1;
let countMax = 1;
let maxNum = 0;

if (N >= 1 && N <= 1024) {
  for (let i = 0; i < N; i++) {
    arrN.push(+gets());
  } arrNSorted = arrN.slice().sort(); // [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 9]

  for (let i = 0; i < arrNSorted.length - 1; i++) {
    if (arrNSorted[i] === arrNSorted[i + 1]) {
      count++;
      if (count > countMax) {
        countMax = count;
        maxNum = arrNSorted[i];
      }
    } else {
      count = 1;
    }
  }
}

print(`${maxNum} (${countMax} times) `);




*/