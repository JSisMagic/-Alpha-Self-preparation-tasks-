const input = ['8', '3', '3', '2', '3', '-2', '5', '4', '2', '7'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const n = +gets()
const k = +gets()
let arr = []

for (i = 1 ; i <= n ; i++){
  arr.push(+gets())
}
arr = arr.sort((a, b) => a - b).reverse()
let sum = 0
for(j = 0; j < k ; j++)
{
sum += arr[j]
}

print(sum)



// Another solution

/*

const n = +gets();
const k = +gets();
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(+gets());
}
arr.sort((a, b) => b - a)
const arr2 = arr.splice(0, k);
const sum = arr2.reduce((a, v) => a + v);
print(sum);



// Another solution



const input = ['8', '3', '3', '2', '3', '-2', '5', '4', '2', '7'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const n = +gets();
const k = +gets();
let arr = [];
for (let i = 0; i < n; i++) {
    const curr = +gets();
    arr.push(curr);
}
arr.sort((a, b) => b - a);
let sum = 0;
for (let i = 0; i < k; i++) sum+=arr[i];
print(sum);

*/