var notas = [];
var media_notas = 0;

function mecanismo(){
    document.getElementById("contenido").innerHTML = "";
    for (var i=0;i<notas.length;i++)
        if (i==0)
            document.getElementById("contenido").innerHTML = notas[i];
        else
            document.getElementById("contenido").innerHTML += ", " + notas[i];
}

function comprobador(){
     
    var nota = parseFloat(document.getElementById("nota").value);

    if(nota >=0 && nota<=10){

        notas.push(nota);
        mecanismo();
        
    }else{
        mostrar();
        document.getElementById("mostrar").innerHTML = "No se pueden introducir notas negativas o superiores a 10. Por favor, intentelo de nuevo" 
    }

}


function eliminar(){

    notas.pop();
    mecanismo();
}

function media(){
    
    mostrar();

    var suma_notas = 0;
    for(j=0; j < notas.length; j++){
       
        suma_notas += notas[j];
    }
    
    media_notas = suma_notas / notas.length;
    document.getElementById("mostrar").innerHTML = "La media de las notas registradas es: " + media_notas;

   
    }

   function mostrar(){

    $(document).ready(function() {
        setTimeout(function() {
            $("#mostrar").fadeIn(1000);
        },2000);
    })

    $(document).ready(function() {
        setTimeout(function() {
            $("#mostrar").fadeOut(1500);
        },2000);
    })
   } 
 
