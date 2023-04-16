let input = ["10","3"]

const N = +gets();


let numbers = [];


for (let i = 1; i <= N; i++) {

  if (i % 3 !== 0 && i % 7 !== 0) {
    numbers.push(i);
  }
}


print(numbers.join(' '));


// Another solution 

/*

let n = gets();

let output = '';
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 7 === 0 ){
        continue;
    }
output = output + ' ' + i;
}

print(output);

*/