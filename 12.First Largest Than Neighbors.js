const input = ['6', '-26 -25 -28 31 2 27'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

const num = +gets();
const list = gets();
const arr = list.split(' ').map(Number);
for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
        print(i);
        break;
    } 
}


// Another solution 

/*

function main() {

    let n = gets();
    let arr = gets().split(' ').map(Number);

    
    let index = firstLargerThanNeighbors(arr);
    print(index);
}

function firstLargerThanNeighbors(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            return i;
        }
    }
    return -1;
}

main();

*/