 /*2. Escribir una funcion que tome un objeto con las propiedades nombre, editorial y años como argumento 
y devuelva una cadena con la informacion completa del comic en formato 'Nombre del comic(Editorial, Año)' */

// const comics = {
//     informacion: function(nombre, editorial, año) {
//         console.log(`El Comic es ${nombre}, ${editorial}, ${año}`)
//     },
//     tipo: function(cargo) {
//         console.log(cargo)
//     }
// }

// comics.informacion('Spiderman', 'Marvel', 1962)
// comics.informacion('Batman', 'DC-Comics', 1987)
// comics.informacion('Avengers', 'Marvel', 2018)


// function comicInfo(objeto) {
//     return `${objeto.nombre} (${objeto.editorial}, ${objeto.año})`;
// }

// const spiderman = {
//    nombre: 'the Amazing Spiderman',
//    editorial: 'vid',
//    año: 19965
// }
// const batman = {
//    nombre: 'The Batman',
//    editorial: 'El colombiano',
//    año: 2000
// }

// console.log(comicInfo(batman))
// console.log(comicInfo(spiderman))

// function comicInfo(comic) {    
//     return `${comic.nombre}, ${comic.editorial}, ${comic.año}`;
// }

// const comic1 = {
//     nombre: 'Spiderman-Man: Blue',
//     editorial: 'Marvel Comics',
//     año: 2002
// }

// const comic2 = {
//     nombre: 'Batman',
//     editorial: 'DC Comics',
//     año: 2003
// }

// console.log(comicInfo(comic1));
// console.log(comicInfo(comic2));

// Funcion flecha
const comicInfo = (comic) => `${comic.nombre}, ${comic.editorial}, ${comic.año}`;

const comic1 = {
    nombre: 'Spiderman-Man: Blue',
    editorial: 'Marvel Comics',
    año: 2002
}

const comic2 = {
    nombre: 'Batman',
    editorial: 'DC Comics',
    año: 2003
}

console.log(comicInfo(comic1))
console.log(comicInfo(comic2))


