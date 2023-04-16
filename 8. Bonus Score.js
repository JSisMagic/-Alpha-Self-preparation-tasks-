let print = this.print || console.log;

const input = ["2"]
const score = +gets(); 

if (score >= 1 && score <= 3) { 
  print(score * 10); 
} else if (score >= 4 && score <= 6) { 
  print(score * 100); 
} else if (score >= 7 && score <= 9) { 
  print(score * 1000); 
} else { 
  print("invalid score");
}

// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5