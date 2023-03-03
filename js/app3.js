/*3. Escribir una funcion que tome un objeto con las propiedades 'nombre', 'episodios estreno
como argumento y devuelva una cadena con la informacion completa del anime Episodios: -Año de estreno: */

// function animeInfo(anime) {
//     return `${anime.nombre} (${anime.episodios}, ${anime.añoEstreno})`
// }

// const anime1 = {
//     nombre: 'Naruto Shippuden',
//     episodios: 440,
//     añoEstreno: 1999
// }

// const anime2 = {
//     nombre: 'Deamon Slayer',
//     episodios: 26,
//     añoEstreno: 2019,
// }

// console.log(animeInfo(anime1));
// console.log(animeInfo(anime2));

const animeInfo = (anime) => `${anime.nombre} (${anime.episodios}, ${anime.añoEstreno})`;

const anime3 = {
    nombre: 'Samurai X',
    episodios: 440,
    añoEstreno: 1999
}

const anime4 = {
    nombre: 'Death Note',
    episodios: 26,
    añoEstreno: 2019,
}

console.log(animeInfo(anime3));
console.log(animeInfo(anime4));