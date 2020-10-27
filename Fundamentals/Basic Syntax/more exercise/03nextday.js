function date(yy, mm, dd) {
    let theYear = Number(yy);
    let theMonth = Number(mm);
    let theDate = Number(dd);
    let newDay = new Date(theYear, theMonth - 1, theDate);
    let year = newDay.getFullYear();
    let month = newDay.getMonth() + 1;
    let day = newDay.getDate();
    let leapYear = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    let nextDay = day + 1;
    if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day + 1 > 31) {
        month += 1;
        nextDay = 1;
    } else if ((month == 4 || month == 6 || month == 9 || month == 10) && day + 1 > 30) {
        month += 1;
        nextDay = 1;
    } else if (month == 2) {
        if (leapYear && day + 1 > 29) {
            month += 1;
            nextDay = 1;
        } else if (leapYear == false && day + 1 > 28) {
            month += 1;
            nextDay = 1;
        }
    }
    if (month > 12) {
        month = 1;
        year += 1;
        nextDay = 1;
    }

    console.log(`${year}-${month}-${nextDay}`);

}
date(1, 1, 1)
date(1951, 12, 24)
date(2016, 9, 30)
date(2016, 2, 28)
