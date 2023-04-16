const input = ['integer', '1'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let type = gets();
let value = gets();


switch (type) {
    case 'integer':

        value = parseInt(value) + 1;
        break;
    case 'real':
       
        value = parseFloat(value) + 1;
        
        value = value.toFixed(2);
        break;
    case 'text':
      
        value += '*';
        break;
}


print(value);


// Another solution 

/*

const input = ['integer', '1'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;

let choise = gets();
let value = gets();

switch(choise) {
    case 'integer':
    let num = +(value) + 1;
    print(num); break;
    case 'real':
    let num2 = +(value) + 1;
    print(num2.toFixed(2)); break;
    case 'text':
    let str = (`${value}*`);
    print(str);
}


// Another solution 


const type = gets();
let value = 0;
switch (type) {
    case 'integer': value = +gets() + 1; break;
    case 'real': value = (+gets() + 1).toFixed(2); break;
    case 'text': value = gets() + '*';
}
print(value);

*/
