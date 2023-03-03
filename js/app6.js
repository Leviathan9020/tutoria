/*6. Escribir una funcion que tome un objeto con las propiedades 'nombre', 'kills' y 'muertes' como argumento
y devuelva la relacion entre muertes y asesinatos en forma de porcentaje  */

const calculateKDRatio = ({ nombre, kills, muertes }) => {
    const kdratio = (kills / muertes) * 100;
    return `${nombre}: ${kdratio.toFixed(2)}%`;
  };

  console.log(calculateKDRatio({ nombre: 'John', kills: 20, muertes: 10 })); 
  console.log(calculateKDRatio({ nombre: 'Jane', kills: 10, muertes: 20 }));
  