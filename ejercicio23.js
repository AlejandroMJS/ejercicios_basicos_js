const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];

  const smallMovie = []

  const midMovie = []

  const bigMovie = []


  for (let i = 0; i < movies.length; i++) {

    const currentMovie = movies[i]

    if (currentMovie.durationInMinutes < 100) {

        smallMovie.push(currentMovie)

    }

    else if (currentMovie.durationInMinutes >= 100 && currentMovie.durationInMinutes < 200) {

        midMovie.push(currentMovie)

    }

    else {
        bigMovie.push(currentMovie)
    }



  }

console.log("Películas pequeñas:", smallMovie.map(movie => `${movie.name} (${movie.durationInMinutes} min)`));
console.log("Películas medianas:", midMovie.map(movie => `${movie.name} (${movie.durationInMinutes} min)`));
console.log("Películas largas:", bigMovie.map(movie => `${movie.name} (${movie.durationInMinutes} min)`));