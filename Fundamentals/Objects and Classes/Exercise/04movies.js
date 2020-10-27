function projection(input) {
    let movies = [];
    for (let i = 0; i < input.length; i++) {
        let string = input[i].split(' ');

        if (string.includes('addMovie')) {
            let movieName = string.slice(1).join(' ');
            let movieObject = { name: movieName };
            movies.push(movieObject);
        } else if (string.includes('directedBy')) {
            let index = string.indexOf('directedBy');
            let movieName = string.slice(0, index).join(' ');
            let movieDirector = string.slice(index + 1).join(' ');
            for (let movie of movies) {
                if (movie.name === movieName) {
                    movie.director = movieDirector;
                }
            }
        } else if (string.includes('onDate')) {
            let index = string.indexOf('onDate');
            let movieName = string.slice(0, index).join(' ');
            let movieDate = string.pop();
            for (let movie of movies) {
                if (movie.name === movieName) {
                    movie.date = movieDate;
                }
            }
        }
    }
    for (let movie of movies) {
        if (Object.keys(movie).includes('director') && Object.keys(movie).includes('date')) {
            console.log(JSON.stringify(movie));

        }
    }

}
projection([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);
