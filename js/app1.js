
/*1. Escribir una función que tome un arreglo de numeros como argumento,
donde cada numero representa la puntuacion obtenida en un juego, y devuelva el promedio de todas las puntuaciones */

// function averageScore(scores) {
//     let sum=0;
//     for(let i = 0; i < scores.length; i++) {
//         sum+= scores[i]
//     }
//     return sum / scores.length;
// }

// const scores = [8, 7, 9, 6, 10];
// console.log(averageScore(scores))


// Funciones flecha
const averageScore = (scores) => {
    let sum = 0;
    for(let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum /scores.length;
}

const scores = [8, 7, 9, 6, 10];
console.log(averageScore(scores));








