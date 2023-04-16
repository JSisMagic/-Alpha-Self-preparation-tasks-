let input = [ '5' ];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let n = +gets();

let numbers = 0;
for (let i=1; i<=n; i++) {  // 
  numbers = numbers + i + ' '; 
  
}
print(numbers);

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5