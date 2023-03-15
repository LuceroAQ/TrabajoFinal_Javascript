function loguearse()
{

var user= document.getElementById("usuario").value;

var pass= document.getElementById("passw").value;

if(user=="lucero" && pass=="123")

{


window.location="index.html";

}else{
    alert("Ingrese los datos correctos");
}


}