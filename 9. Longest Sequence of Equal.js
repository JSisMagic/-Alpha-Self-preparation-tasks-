let print = this.print || console.log;
let input = [""]
let N = gets();
let numbers = [];
for (let i = 0; i < N; i++) {
    numbers.push(gets());
}


let longestSequence = 1;
let currentSequence = 1;
for (let i = 1; i < N; i++) {
    if (numbers[i] === numbers[i-1]) {
        currentSequence++;
    } else {
        longestSequence = Math.max(longestSequence, currentSequence);
        currentSequence = 1;
    }
}


longestSequence = Math.max(longestSequence, currentSequence);


print(longestSequence);
