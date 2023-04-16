const input = ['1,1,1,1,1,1,1,1'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

const nums = gets().split(',').map(Number);
nums.sort((a, b) => a - b);
let missing = '';

for (let i = 1; i <= nums.length; i++) {
  let isThere = false;
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] === i) {
      isThere = true;
      break;
    }
  }
  if (!isThere) {
    missing += i + ',';
  }
}

print(missing.slice(0, -1));




// Another solution 


/* 

const input = gets().split(',').map(Number); 

const n = input.length; 

const result = []; 


for (let i = 1; i <= n; i++) {
  if (!input.includes(i)) { 
    result.push(i); 
  }
}

print(result.join(','));


*/