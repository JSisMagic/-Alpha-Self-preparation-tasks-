const input = [
    "5"
  ];

const i = +gets();
for (let index = 0; index < i; index++) {
    print(index * 5);
}


// Another solution 

/*


let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = +gets()
let array = []
let index = 0

for(let i = 1; i <= n; i++){
let element = index*5
array.push(element)
index++
print(element)
}

*/