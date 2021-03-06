let personajes = []; //guardo en un array el objeto ue me da la json

function imprimirObjeto(personaje) {
  let elResultadoBusqueda = document.getElementById("resultado-busqueda");
  let impresion = "";

  //imprimir por el dom toda la info

  impresion += `<h6 class="impresion_title">Descripcion de: ${personaje.name}"</h6>" 
      <p>Nombre: ${personaje.name} </p>
      <p>Altura: ${personaje.mass} </p>
      <p>Peso: ${personaje.height} </p>
      <p>Color ojos: ${personaje.eye_color} </p>
      <p>Color piel: ${personaje.skin_color} </p>
      <p>Color pelo: ${personaje.hair_color} </p>
      <p>Fecha nacimiento: ${personaje.birth_year} </p>
      <p>Género: ${personaje.gender}</p>
      <a id="favoritos class="impresionboton">Me gusta</a>`;

  elResultadoBusqueda.innerHTML = impresion;
}

//busqueda en el array del personaje 
function busquedaPersonaje(nombrePersonaje) {
  let personaje = null;

  for (let i = 0; i < personajes.length; i++) {
    if (personajes[i].name === nombrePersonaje) {
      personaje = personajes[i];
    }
  }

  return personaje;
}

const mapData = function (groupsPersonajes) {
  let resultD = [];

  for (let i = 0; i < groupsPersonajes.length; i++) { // recorre cada grupo de personajes
    let groupPersonajes = groupsPersonajes[i];

    for (let j = 0; j < groupPersonajes.length; j++) { // recorre cada personaje del grupo
      let personaje = groupPersonajes[j];

      resultD.push({
        name: personaje.name,
        height: personaje.height,
        mass: personaje.mass,
        hair_color: personaje.hair_color,
        skin_color: personaje.skin_color,
        eye_color: personaje.eye_color,
        birth_year: personaje.birth_year,
        gender: personaje.gender,
      });
    }

  }
  return resultD;
};
//peticion de a api una y otra vez hasta que ya no haya ninguna página más. (la api solo devuelve la primera poágina)
const pideDatos = (numPage) => {
  const host = `https://swapi.dev/api/people/?page=${numPage}`;
  return new Promise((resolve, reject) => {
    fetch(host)
      .then((response) => response.json())
      .then(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
};

(async () => {
  try {
    const dataTmp = [];
    for (let i = 0; i < 9; i++) {
      const codCurrencies = await pideDatos(i + 1);
      dataTmp.push(codCurrencies.results);
    }
    personajes = mapData(dataTmp);
    main();
    // en caso de error 
} catch (e) {
    console.log(e);
}
})();

const main = function () {
  let btnBuscador = document.getElementById("busqueda-boton");
  let elInputBuscador = document.getElementById("input-busqueda");

  console.log({ btnBuscador });
  console.log({ elInputBuscador });

  btnBuscador.addEventListener("click", function () {
    let personaje = busquedaPersonaje(elInputBuscador.value);
    if (personaje !== null) imprimirObjeto(personaje);
  });
};

// <button id="gusta" class="impresion_boton" onclick="botonFavoritos()"></button>`;

