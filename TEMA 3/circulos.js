/*
Versión cutre
function ocultarRojo(){
    document.getElementById("rojo").style.visibility = "hidden"; display = "none"
}
function ocultarAzul(){
    document.getElementById("azul").style.visibility = "hidden"; display = "none"
}
function ocultarVerde(){
    document.getElementById("verde").style.visibility = "hidden"; display = "none"
}
*/
/*Versión mejorada */
function ocultar(caja){
    document.getElementById(caja).style.visibility ="hidden"; 
}
function mostrar(caja){
    document.getElementById(caja).style.visibility ="visible"; 
}
/*Versión con un solo botón*/
function ocultar_o_mostrar(caja){
    if (document.getElementById(caja).style.visibility =="visible" || 
document.getElementById(caja).style.visibility =="")
    document.getElementById(caja).style.visibility = "hidden";
    else
        document.getElementById(caja).style.visibility = "visible";
}