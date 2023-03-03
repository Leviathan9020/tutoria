/* 10. Escribir una función que tome un objeto con las propiedades 'nombre', 'views' y
 'followers' como argumento y devuelva la relación entre vistas y seguidores en forma de porcentaje. */

 // Un problema que tengo es que me enredo de como interpretar el ejercicio 
const twitch = (nombre,views, followers) => {
    const relacionVistaSeguidores = (followers / views) * 100;
    return `${nombre} tiene ${relacionVistaSeguidores}%`  
}
    const nombre = 'leviathangam';

console.log(twitch('levithangam',5000, 100 ))