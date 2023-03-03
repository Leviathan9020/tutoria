/* 7. Escribir una función que tome un arreglo de objetos con las propiedades 'usuario' y 
'seguidores' como argumento y devuelva el usuario con más seguidores. */

const usuarioConMasSeguidores = (usuarios) => {
    let usuarioMasSeguido = usuarios[0];
    for (let i = 1; i < usuarios.length; i++) {
      if (usuarios[i].seguidores > usuarioMasSeguido.seguidores) {
        usuarioMasSeguido = usuarios[i];
      }
    }
    return usuarioMasSeguido.usuario;
  }

  const seguidores = [
    {usuario: 'juansguarnizo', seguidores: 10.1},
    {usuario: 'rivers_gg', seguidores: 3.1},
    {usuario: 'TheGrefg', seguidores: 11.2}
  ];

  console.log(usuarioConMasSeguidores(seguidores))