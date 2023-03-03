/*4. Escribir una funcion que tome un arreglo de objetos con las propiedades 'titulo' y 'año' como argumento 
 * y devuelva una cadena con el título de la pélicula más reciente.
 */

// la funcion con chat gpt
const latestMovieTitle = (movies) => {
    let latestYear = 0;
    let latestMovie = '';
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].año > latestYear) {
        latestYear = movies[i].año;
        latestMovie = movies[i].titulo;
      }
    }
    return latestMovie;
  }

  const movies = [
    {titulo: 'The Dark Knight', año: 2008},
    {titulo: 'Avengers: Endgame', año: 2019},
    {titulo: 'Inception', año: 2010},
    {titulo: 'Black Panther', año: 2018}
  ];
  console.log(latestMovieTitle(movies));

// la que yo hice y tengo duda 

// const infoMovies = movies => `${movies.titulo}, ${movies.año}`;

// const movies1 = {
//     titulo: 'Ant-Man and The Wasp: Quantumania',
//     año: 2023
// }

// const movies2 = {
//     titulo: 'Avatar: The Way of Water',
//     año: 2022
// }

// const movies3 = {
//     titulo: 'Missing',
//     año: 2023,
// }

// const movies4 = {
//     titulo: 'Glass Onion: A Knives Out Mystery',
//     año: 2022,
// }

// const movies5 = {
//     titulo: 'Knives Out',
//     año: 2019
// }

// console.log(infoMovies())
