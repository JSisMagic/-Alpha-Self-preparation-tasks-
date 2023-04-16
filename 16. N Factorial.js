let n=BigInt(+gets());
let fact=BigInt(1);
for (let a=BigInt(1); a<=n; a++) {
    fact*=a;
    
  }
  print(fact);


// Another solution 


/*

let n = gets();

let factorial = [1];
for (let i = 1; i <= n; i++) {
    let carry = 0;
    for (let j = 0; j < factorial.length; j++) {
        let product = factorial[j] * i + carry;
        factorial[j] = product % 10;
        carry = Math.floor(product / 10);
    }
    while (carry > 0) {
        factorial.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
}


print(factorial.reverse().join(''));


// Another solution 

/*


const n = +gets();

factorial = BigInt(1);

for (let i = 1; i <= n; i++) {
  factorial *= BigInt(i);
}
print(factorial);



*/