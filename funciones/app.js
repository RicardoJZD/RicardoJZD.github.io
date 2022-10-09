document.getElementById("formulario").addEventListener("submit", crear);

function crear(e) {
  nombre = document.getElementById("nombre").value;
  apellido = document.getElementById("apellido").value;
  edad = document.getElementById("edad").value;
  usser = document.getElementById("usu").value;
  password = document.getElementById("pass").value;
  fecha = document.getElementById("fecha").value;

  let nuevoRegistro = {
    nombre, apellido, edad, usser, password, fecha,
  }

  if (localStorage.getItem("nuevoRegistro") === null) {
    let usuario = [];
    usuario.push(nuevoRegistro);
    localStorage.setItem("nuevoRegistro", JSON.stringify(usuario))
  } else {
    let usuario = JSON.parse(localStorage.getItem("nuevoRegistro"))
    usuario.push(nuevoRegistro)
    localStorage.setItem("nuevoRegistro", JSON.stringify(usuario))
  }
  document.getElementById("formulario").reset();
  e.preventDefault();
  console.log("Registro Guardado Correctamente");
  alert("Registro Guardado");
}

//acceso
function ir(){
  let us=document.getElementById("email").value;
  let con=document.getElementById("contr").value;
  let usuario = JSON.parse(localStorage.getItem("nuevoRegistro"));
  usuario.map((item)=>{
    if((item.usser == us)&&(item.password==con)){ 
      console.log("Ingreso Exitoso");
      window.location.replace("inicio.html");
  }else{
    toas();
  }})}

//toasts
function saludo(){
  var toastTrigger = document.getElementById('liveToastBtn')
  var toastLiveExample = document.getElementById('liveToast')
  if(toastTrigger){ 
      var toast = new bootstrap.Toast(toastLiveExample)
      toast.show()  
  }
}
function toas(){
  var toastTrigger = document.getElementById('liveToast')
  var toastLiveExample = document.getElementById('liveT')
  if(toastTrigger){ 
      var toast = new bootstrap.Toast(toastLiveExample)
      toast.show()  
  }  
}



