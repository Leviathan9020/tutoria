/* 8. Escribir una función que tome un objeto con las propiedades 'titulo', 'juego' y 'streamer' 
como argumento y devuelva una cadena con la información completa del stream en 
formato título del stream - juego - streamer.  */

const streams = (twitch) => `${twitch.titulo},  ${twitch.juego}, ${twitch.streamer}`;

const stream1 = {
    titulo: 'POLÉMICA SQUID, MUERTES, REACCIONES, ANALIZAMOS Y OPINAMOS',
    juego: 'Just Chatting',
    streamer: 'TheGrefg'
}

const stream2 = {
    titulo: 'STREAM DE MANCOS PARA MANCOS, HECHO POR MANCOS',
    juego: 'Call of Duty: Warzone',
    streamer: 'leviathangam'
}

console.log(streams(stream2))
console.log(streams(stream1))


// Opcion 2 funcion flecha
// const stream = {
//     titulo: 'SQUID CRAFT 2 *DÍA 2*',
//     juego: 'MineCraft',
//     streamer: 'juansguarnizo'
// }
 
// const informacionStream = ({ titulo, juego, streamer }) => {
//     return `${titulo} - ${juego} - ${streamer}`;
// }

// console.log(informacionStream(stream))


// Opcion 3 desustructuracion y funcion flecha
// const informacionStream = ({ titulo, juego, streamer }) => `${titulo} - ${juego} - ${streamer}`;

// const stream = {
//     titulo: 'PRIMERA WIN RESURGIMIENTO WARZONE 2, VAMOS C CLAN',
//     juego: 'Call of Duty: Warzone',
//     streamer: 'Cece_OG'
// }

// console.log(informacionStream(stream))

