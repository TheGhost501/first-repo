function sort(a, b, c) {
    const numbers = [a, b, c];
    numbers.sort(function(a, b) {
        return a - b;
      });
      console.log(numbers[2]);
      console.log(numbers[1]);
      console.log(numbers[0]);
      
}
sort(2, 3, 1)