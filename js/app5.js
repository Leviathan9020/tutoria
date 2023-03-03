/*5. Escribir una funcion que tome un arreglo de objetos con las 
propiedades 'nombre', 'temporadas', y 'estreno' como argumento y devuelva la serie con más temporadas */

// function longestSeries (nombre, temporadas, estreno) {
//     return `${longestSeries.nombre}, ${longestSeries.temporadas}, ${longestSeries.estreno}`
// }

// const series = [
//     {nombre: 'The Bigbang Theory', temporadas: 12, estreno: 2019},
//     {nombre: 'The Game of Trones', temporadas: 8, estreno: 2011},
//     {nombre: 'The Last of Us', temporadas: 1, estreno: 2023},
//     {nombre: 'Strenger Things', temporadas: 4, estreno: 2016}
// ];
// console.log(longestSeries(series));

const longestSeries = (series) => {
    let longestSeasons = 0;
    let longestSeries = '';
    for (let i = 0; i < series.length; i++) {
      if (series[i].temporadas > longestSeasons) {
        longestSeasons = series[i].temporadas;
        longestSeries = series[i].nombre;
      }
    }
    return longestSeries;
  }

  const series = [
    {nombre: 'The Bigbang Theory', temporadas: 12, estreno: 2019},
    {nombre: 'The Game of Trones', temporadas: 8, estreno: 2011},
    {nombre: 'The Last of Us', temporadas: 1, estreno: 2023},
    {nombre: 'Stranger Things', temporadas: 4, estreno: 2016}
  ];
  console.log(longestSeries(series));
