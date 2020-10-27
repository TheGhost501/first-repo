function power2(input) {
let n = Number(input.shift());
let num = 1;
for (let i = 0; i <= n; i += 2) {
console.log(num);
num = num * 2 * 2;} 
}
power2([2])