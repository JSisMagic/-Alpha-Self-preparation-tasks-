const input = ['5'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const num = +gets();

for (let i = 1; i <= num; i++) {
    let result = '';
    for (let j = 1; j <= i; j++) {
        result += ` ${j}`;
    }
    print(result);
}
for (let i = num - 1; i >= 0; i--) {
    let result = '';
    for (let j = 1; j <= i; j++) {
        result += ` ${j}`;
    }
    print(result);
}

//Another solution


/*


let n = gets();

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    print(row);
}

for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    print(row);
}



*/