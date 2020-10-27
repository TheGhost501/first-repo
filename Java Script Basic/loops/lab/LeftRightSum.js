function twosums(input) {
let n = Number(input.shift());
let leftSum = 0;
let rightSum = 0;
for (let i = 1; i <= n; i++) {
    let element = Number(input.shift());
        leftSum = leftSum + element;}
for (let y = 1; y <= n; y++) {
    let element = Number(input.shift());
    rightSum = rightSum + element;}

if (leftSum == rightSum)
{console.log("Yes, sum = " + leftSum);}
else{
let diff = Math.abs(rightSum - leftSum);
console.log("No, diff = " + diff);}
}
twosums([2, 90, 9, 50, 50, ])
twosums([2, 10, 90, 60, 40, ])