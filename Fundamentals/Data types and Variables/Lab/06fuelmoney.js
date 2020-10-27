function fuelMoney(distance, passengers, costLitre) {
    let totalLitre = (distance / 100) * 7;
    totalLitre += passengers * 0.100;
    let totalCost = costLitre * totalLitre;
    console.log(`Needed money for that trip is ${totalCost}lv.`);

}
fuelMoney(260, 9, 2.49)