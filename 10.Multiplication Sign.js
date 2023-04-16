let a = +gets();
let b = +gets();
let c = +gets();

if (a === 0 || b === 0 || c === 0) {
    print('0');
} else if (a < 0 && b > 0 && c > 0 || a > 0 && b < 0 && c > 0 || a > 0 && b > 0 && c < 0) {
    print('-');
} else if (a < 0 && b < 0 && c < 0 ) {
    print('-');
}  else {
    print('+');
}


// Another solution 


/*

let a = +gets();
let b = +gets();
let c = +gets();

if (a === 0 || b === 0 || c === 0) {
print(0);
} else if (a > 0 && b > 0 && c > 0) {
print("+");
} else if (a < 0 && b < 0 && c < 0) {
print("-");
} else if (a < 0 && b > 0 && c > 0) {
print("-");
} else if (a > 0 && b < 0 && c > 0) {
print("-");
} else if (a > 0 && b > 0 && c < 0) {
print("-");
} else if (a > 0 && b < 0 && c < 0) {
print("+");
} else if (a < 0 && b > 0 && c < 0) {
print("+");
} else if (a < 0 && b < 0 && c > 0) {
print("+");
}


// Another solution 



let input = [
    '-0.5', 
    '0',
    '-2'
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +gets();
let b = +gets();
let c = +gets();

if ((a < 0 && b > 0 && c > 0) || (b < 0 && a > 0 && c > 0) || (c < 0 && a > 0 && b > 0) || (a < 0 && b < 0 && c < 0))
{
    print("-");
}
else if ((a < 0 && b < 0 && c > 0) || (a < 0 && c < 0 && b > 0) || (b < 0 && c < 0 && a > 0) || (a > 0 && b > 0 && c > 0))
{
    print("+");
}
else if (a == 0 || b == 0 || c == 0)
{
    print("0");
}

*/

