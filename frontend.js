let personajes = [];

function imprimirObjeto(personaje) {
 let elResultadoBusqueda = document.getElementById("resultado-busqueda");
  let impresion = "";

  impresion += `<h6 class="impresion_title">Descripcion de: ${personaje.name}"</h6>" 
      <p>Altura: ${personaje.mass} </p>
      <p>Peso: ${personaje.height} </p>
      <p>Color ojos: ${personaje.eye_color} </p>
      <p>Color piel: ${personaje.skin_color} </p>
      <p>Color pelo: ${personaje.hair_color} </p>
      <p>Fecha nacimiento: ${personaje.birth_year} </p>
      <p>Género: ${personaje.gender}</p>
      <a id="boton-busqueda" class="busqueda_favoritos">Botón de favoritos</a>`
      ;

  elResultadoBusqueda.innerHTML = impresion;
}

// <button id="gusta" class="impresion_boton" onclick="botonFavoritos()"></button>`;

function busqueda(){
  //if (json.next es vacio) llamaapi(json.next) 
  Else parseo(json.array) {
    boton
  }
if (name=0){
	fetch('https://swapi.dev/api/people/')
	  .then(response => response.json())
	  .then(data => recogerRespuestas(data));

}
}

                

      
function recogerRespuestas(respuestas){
	console.log(respuestas);
 	var impresion=""
	var name = document.getElementById("inputbusqueda").value;

	for (let i = 0; i< respuestas.results.length; i++) {
		console.log(respuestas.results[i].name +" "+ respuestas.results[i].height +" "+respuestas.results[i].mass   )

		if(respuestas.results[i].name ==name){
          			  impresion += '<h6 class="impresion_title">Descripcion de:' + respuestas.results[i].name  + '</h6>'+
          		 	 '<p class="impresion_p4">Color de ojos:'+ respuestas.results[i].height +'</p>'
		}

	}

 	document.getElementById ("resultadobusqueda").innerHTML= impresion
}

      
function imprimirobjeto(datos){
	console.log("entro en imprimirobjeto");
}

   
function imprimirobjeto(datos){
	console.log("entro en imprimirobjeto");
}

   
function botonFavoritos(datos){
	console.log("entro en boton");
}