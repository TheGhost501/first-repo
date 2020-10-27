function bonus(input) {
    let number = Number(input.shift());
    let point = 0.0; 
    if (number <=100) {point = 5;}
    else if (number > 1000) {point = number * 0.1;}
    else  {point = number * 0.2;}
    if (number % 2 == 0) {
        point +=1;  
    } else if (number % 10 == 5) { point +=2;}
  
    console.log(point);
    console.log(number + point);

   
}
bonus(['20'])
bonus(['175'])
bonus(['2703'])
bonus(['15875'])