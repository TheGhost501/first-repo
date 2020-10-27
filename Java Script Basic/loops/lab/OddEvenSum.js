function oddEvenSum(input){
    let n = Number(input.shift());
    let oddSum = 0;
    let evenSum = 0;

 for (let i = 1; i <= n; i++) {
 let element = Number(input.shift());
 if (i % 2 === 0) evenSum += element;
 else oddSum += element;
}
if (evenSum === oddSum) {
console.log('Yes')
console.log('Sum = ' + evenSum);
}else
{let diff = Math.abs(evenSum - oddSum);
console.log('No')
console.log('Diff = ' + diff);}
}
oddEvenSum([4,10,  50, 60,20])