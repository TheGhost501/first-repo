function lab(w, h) {
    let lenght = w * 100;
    let width = h * 100;
    let desks = (width - 100) / 70;
    let rows = lenght / 120;
    let workstations = Math.floor(desks) * Math.floor(rows) - 3;
    console.log(workstations)
}
lab(15, 8.9)