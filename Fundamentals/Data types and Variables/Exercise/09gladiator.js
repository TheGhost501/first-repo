function gladiator(lostFights, helmet, sword, shield, armor) {
    let helmetBroken = Math.floor(lostFights / 2);
    let swordBroken = Math.floor(lostFights / 3);
    let shieldBroken = 0;
    for (i = 1; i <= lostFights; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            shieldBroken += 1;
        }
    }
    let armorBroken = Math.floor(shieldBroken / 2);
    let expenses = helmetBroken * helmet + swordBroken * sword + shieldBroken * shield + armorBroken * armor;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}
gladiator(7, 2, 3, 4, 5)