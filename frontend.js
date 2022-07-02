let nombrebusqueda = [];    
    function busqueda(){
                    nombre = document.getElementById("inputbusqueda").value;
        verFueraDeLaFuncion = nombre;
        document.createElement.html (`p`)
        alert(verFueraDeLaFuncion);
}



    fetch('https://swapi.dev/api/people/').then(response => response.json()) .then(data => imprimirobjeto(data));
    //problema con la api hay que hacer 8 llamadas con el fetch se podria hacer con un for? o habria que hacerlo con 

function imprimirobjeto(datos){
let impresion = '';
console.log(datos)

     for (let i = 0; i< datos.results.length; i++) {
        console.log(datos.results[i].name)
        // crear un if dentro del for si se cumple entonces imprimir datos del json
        
       
            impresion += '<h6 class="impresion_title">Descripcion de:</h6>'+datos.results[i].name+'</h6>'+
            '<p class="impresion_p1>Peso:'+datos.results[i].height+'</p>'+
		//aniadir mas lineas con mas detalles
            '<button id="gusta" class="impresion_boton" onclick="botonFavoritos()"></button>' // crear un boton de me gusta 
	   console.log(impresion);

    
    }
    document.getElementById ("resultadobusqueda").innerHTML= impresion;

}

.catch(function error(err) {
    console.error(err);
});