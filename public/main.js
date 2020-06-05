console.log("Dios está en Todo");

var codigoActivado = document.getElementById("codS");
var nombre = document.getElementById("nombre");
var sectionOracion = document.getElementById("sectionOracion");
var formulario = document.getElementById("formulario");
var enNombre = document.getElementById("enNombrede");
var oracion = document.getElementById("oracion");
var btnActivar = document.getElementById("btnActivar");
var btnReiniciar = document.getElementById("btnReiniciar");
var sectionReiniciar = document.getElementById("sectionReiniciar")
var message = document.getElementById("message");
var contRepe = document.getElementById("contRepe")

var contador = 1

btnActivar.addEventListener("click", function (){
    var txtNombre = nombre.value; 
    var txtCodigoActivado = codigoActivado.value;   
    formulario.style.display = "none";
    sectionOracion.style.display= "block";
    contenedor.style.display= "block";
    sectionReiniciar.style.display= "block";
    oEsp = document.createTextNode("para obtener ___________________ en armonia perfecta con el universo, ideal para mi forma y estilo de vida, sintiendome bien, en paz y agradecid@.")
    oracion.appendChild(oEsp)
    var rellenaEnNombre= document.createTextNode("Activo este Codigo Sagrado en nombre de: "+txtNombre+"");
    enNombre.appendChild(rellenaEnNombre)
    
    
    document.getElementById("codigoS").innerHTML = "Activarás el codigo <br><strong>"+txtCodigoActivado+"</strong> <br> haz click en el recuadro para iniciar el contador, con cada click repite el codigo hasta culminar la cuenta";
    message.style.display = "none"    
})

function contar() {
    if (contador == 11 || contador == 21 || contador == 31 || contador == 41){
        Swal.fire("Haz una pausa para agradecer y sentir tu deseo hecho realidad y repite 'Gracias, Gracias, Gracias por escucharme'")
    }
    if (contador == 46) {
        Swal.fire("repite 'Gracias Gracias Gracias porque hecho está' y permitete sentir la plenitud de vivir tu deseo")
        contador = 0
        reiniciar()
    }

    var txtCodigoActivado = codigoActivado.value;
   
    document.getElementById("codigoS").innerHTML = "Activaste el codigo <br><strong id='cod'>"+txtCodigoActivado+"</strong>";
    contRepe.innerHTML = "conteo número " + contador;
    contador++   
        
}

function reiniciar () {
    
    formulario.style.display = "block";
    sectionOracion.style.display= "none";
    contenedor.style.display= "none";
    sectionReiniciar.style.display= "none"
    contador = 0;
    codigoActivado.value = 
    nombre.value = 

    document.getElementById("codigoS").innerHTML = "";
    message.style.display = "block";
    oracion.innerHTML = "";
    enNombre.innerHTML = "";
    contRepe.innerHTML = "";

}

btnReiniciar.addEventListener("click", function(){
    reiniciar();
})

