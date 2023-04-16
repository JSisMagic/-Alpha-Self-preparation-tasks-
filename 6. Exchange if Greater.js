let A = +gets();
let B = +gets();


if (A > B) {
  let temp = A;
  A = B;
  B = temp;
}


print(A + ' ' + B);