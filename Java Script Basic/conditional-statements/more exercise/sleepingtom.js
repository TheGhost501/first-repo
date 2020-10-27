function tom(holiday) {
    let workdays = 365 - holiday;
    let totalhrs = (workdays * 63) + (holiday * 127);
    let diff = Math.abs(30000 - totalhrs);
    if (totalhrs > 30000) {
        console.log('Tom will run away');
        console.log(`${Math.floor(diff / 60)} hours and ${diff % 60} minutes more for play`);
    } else {
        console.log('Tom sleeps well');
        console.log(`${Math.floor(diff / 60)} hours and ${diff % 60} minutes less for play`);
    }
}
tom(20)
tom(113)