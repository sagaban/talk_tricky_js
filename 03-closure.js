var apellido = "Gregory"
function creaFunc() {
  var nombre = "Benji";
  function muestraNombre() {
    console.log(nombre + " " + apellido);
  }
  return muestraNombre;
}

var miFunc = creaFunc();
miFunc(); 
// apellido = "Button";
// miFunc(); 