//guardar datos en una variable
let nombrebusqueda = [];    
    function busqueda(){
                    nombre = document.getElementById("inputbusqueda").value;
        verFueraDeLaFuncion = nombre;
        document.createElement.html (`p`)
        alert(verFueraDeLaFuncion);
}
//si tenemos nombre busqueda entonces debe de hacer fetch if?
  //conectar la API
if (nombrebusqueda=true){ //este if sobra?
let api='https://swapi.dev/api/people/'
    fetch(api).then(function recogerRespuestas(respuestas)).then(function imprimirobjeto(datos)){
      // hacer un for para recorrer el array  
        impresion=""
      for (let i = 0; i< datos.results.length; i++) {
        
        // crear un if dentro del for si se cumple entonces imprimir datos del json
        if (datos.results==='name') {//falta de innerhtml
            impresion += `<h6 class="impresion_title">Descripcion de:${datos.results.name}</h6>
            <p class="impresion_p1>Peso:${datos.results.name.height}</p>
            <p class="impresion_p2>Color de pelo:${datos.results.name.hair_color}</p>
            <p class="impresion_p3>Color de piel:${datos.results.name.skin_color}</p>
            <p class="impresion_p4>Color de ojos:${datos.results.name.eye_color}</p>
            <p class="impresion_p5>Genero:${datos.results.name.gender}</p>
            <button id="gusta" class="impresion_boton" onclick="botonFavoritos()"></button>` // crear un boton de me gusta 

        } document.getElementById ("resultadobusqueda").innerHTML= impresion
         //else no tenemos ese nombre  crear el html
        else{
           impresion= document.createElement('p')
           impresion.innerText=`<p>Lo siento pero ese nombre no lo tenemos en nuestra base de datos</p>`
           
        } document.body.appendChild(p)// como guardar en un punto especifico del dom?
    }
    } 
}
  
  // favoritos         
                
  document.getElementById("impresion_boton").addEventListener(function botonFavoritos(e)) {

    // hacemos que no se ejecute el enlace
    e.preventDefault();
  
    // leemos los datos clave del producto y los guardamos en un objeto
    // leemos los datos clave del producto y los guardamos en un objeto
    let impresion = {
    id: document.getElementById("producto-id").value,
    nombre: document.getElementById("producto-nombre").textContent,
    url: document.location.href
  };
      

    }}