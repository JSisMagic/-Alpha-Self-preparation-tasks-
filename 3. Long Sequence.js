let i = 2;

while (i < 1002) {
  if (i % 2 == 0) {
    print(i);
  } else {
    print(-i);
  }
  i++;
}

// Another solution 




/*
let print = this.print || console.log;

for (let i = 2; i <= 1001 ; i++) {
    if (i%2 == 0) {
        print(i);
    }
    else {
        print(i*-1);
    }
}

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5

*/