/* 9. Escribir una función que tome un arreglo de objetos con las propiedades 'nombre', 
'gameplay' y 'horas' como argumento y devuelva la cantidad total de horas de juego de todos los streams. */


// Necesito que me expliques este sebas.
const calcularTotalHoras = (streams) => {
    let totalHoras = 0;
    streams.forEach((stream) => {
      totalHoras += stream.horas;
    });
    return totalHoras;
  };
  
  const streams = [
    { nombre: "stream1", gameplay: "Juego1", horas: 10 },
    { nombre: "stream2", gameplay: "Juego2", horas: 5 },
    { nombre: "stream3", gameplay: "Juego1", horas: 8 },
  ];
  
  const totalHoras = calcularTotalHoras(streams);
  console.log(`El total de horas de juego de todos los streams es: ${totalHoras}`);