//guardar datos en una variable
let nombrebusqueda = [];    
    function busqueda(){
                    nombre = document.getElementById("inputbusqueda").value;
        verFueraDeLaFuncion = nombre;
        document.createElement.html (`p`)
        alert(verFueraDeLaFuncion);
};
//si tenemos nombre busqueda entonces debe de hacer fetch if?
  //conectar la API
if (nombrebusqueda=true){ //este if sobra?
let api='https://swapi.dev/api/people/'
    fetch(api).then(function recogerRespuestas(respuestas)).then(function imprimirobjeto(datos)){
      // hacer un for para recorrer el array  
        impresion=""
      for (let i = 0; i< datos.results.length; i++) {
        document.createElement('p')
        // crear un if dentro del for si se cumple entonces imprimir datos del json
        if (datos.results==='name') {//falta de innerhtml
            impresion += `<h6>Descripcion de:${datos.results.name}</h6>
            <p>Peso:${datos.results.name.height}</p>
            <p>Color de pelo:${datos.results.name.hair_color}</p>
            <p>Color de piel:${datos.results.name.skin_color}</p>
            <p>Color de ojos:${datos.results.name.eye_color}</p>
            <p>Genero:${datos.results.name.gender}</p>`
        }  //else no tenemos ese nombre  crear el html
        else{
           impresion= document.createElement('p')
           impresion.innerText=`<p>Lo siento pero ese nombre no lo tenemos en nuestra base de datos</p>`
           document.body.appendChild(p)
        }
    }
    } 
}

 
  // crear un boton de me gusta 
  // si le da a ese boton guardar datos el en lovalsorage con json.stringify           
                



