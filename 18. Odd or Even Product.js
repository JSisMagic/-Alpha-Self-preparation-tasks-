let input = [
    '5',
    '4 3 2 5 2'
  ];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let count = +gets();
let nums = gets().split(" ").map(Number);
let oddProduct = 1;
let evenProduct = 1;

for(let i = 0; i < nums.length;i++)
{
    if((i + 1) % 2 === 0) 
    {
        evenProduct *= nums[i];   
    } 
    else
    {
        oddProduct *= nums[i]; 
    }
}

print(oddProduct === evenProduct ? `yes ${oddProduct}` : `no ${oddProduct} ${evenProduct}`);