function scholarship(input) {
    let income = Number(input.shift());
    let grades = Number(input.shift());
    let minWage = Number(input.shift());
    let excellent = grades * 25;
    let social = minWage * 0.35;
    if (grades < 5.5) {excellent = 0.0;}
    if (grades <= 4.5) { social = 0.0;} 
    if (income >= minWage) {social = 0.0;}
    let scholarship = 0.0;
    if (excellent >= social) {scholarship = excellent} 
    else {scholarship = social}
    if (scholarship == 0.0) {console.log('You cannot get a scholarship!')}
    else if (scholarship = excellent) {console.log(`You get a scholarship for excellent results ${Math.floor(excellent)} BGN`)}
    else  {console.log(`You get a Social scholarship ${Math.floor(social)} BGN`)}
    
   
   
} 
scholarship([300.00, 5.65,420.00])
scholarship([480.00, 4.60,450.00])