function towns(array) {
    for (let i = 0; i < array.length; i++) {
        let curTown = array[i].split(' | ');
        let name = curTown[0];
        let latitude = Number(curTown[1]).toFixed(2);
        let longitude = Number(curTown[2]).toFixed(2);
        let town = {town: name, latitude: latitude, longitude: longitude};
        console.log(town);
        
    }

}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])