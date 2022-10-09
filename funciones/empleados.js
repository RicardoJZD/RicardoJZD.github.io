document.getElementById("formulario").addEventListener("submit", crear);

function crear(e) {

    ide = document.getElementById("id").value;
    ti = document.getElementById("tipo").value;
    nom = document.getElementById("nombre").value;
    emp = document.getElementById("empresa").value;
    dir = document.getElementById("direccion").value;
    pos = document.getElementById("postal").value;
    num = document.getElementById("numero").value;
    cor = document.getElementById("correo").value;
    reg = document.getElementById("regimen").value;
    ci = document.getElementById("city").value;

    let nuevoRegistro = {
        ide, ti, nom, emp, dir, pos, num, cor, reg, ci
    }

    if (localStorage.getItem("Empleado") === null) {
        let usuario = [];
        usuario.push(nuevoRegistro);
        localStorage.setItem("Empleado", JSON.stringify(usuario))
    } else {
        let usuario = JSON.parse(localStorage.getItem("Empleado"))
        usuario.push(nuevoRegistro)
        localStorage.setItem("Empleado", JSON.stringify(usuario))
    }
    mostrar();
    document.getElementById("formulario").reset();
    e.preventDefault();
    console.log("Registro Guardado Correctamente")
}

function mostrar() {
    let usuario = JSON.parse(localStorage.getItem("Empleado"));
    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < usuario.length; i++) {
        let identificacion = usuario[i].ide;
        let nombre = usuario[i].nom;
        let empresa = usuario[i].emp;
        let direccion = usuario[i].dir;
        let postal = usuario[i].pos;
        let numero = usuario[i].num;
        let correo = usuario[i].cor;
        let regimen = usuario[i].reg;
        let tipo = usuario[i].ti;
        let ci = usuario[i].ci;

        document.getElementById("tbody").innerHTML +=
          `<tr>
            <td>${tipo}</td>
            <td>${identificacion}</td>
            <td>${nombre}</td>
            <td>${empresa}</td>
            <td>${direccion}</td>
            <td>${postal}</td>
            <td>${numero}</td>
            <td>${correo}</td>
            <td>${regimen}</td>
            <td>${ci}</td>
          <td><button class="btn btn-primary" onclick="Editar('${identificacion}')">Edit</button>
          <button class="btn btn-danger" onclick="eliminar('${identificacion}')">Delete</button></td>
    `
    }
}
mostrar();


function Editar(identificacion) {
  var div = document.getElementById("body");
   let usuario=JSON.parse(localStorage.getItem("Empleado"));
   for(let i=0;i<usuario.length;i++){
    if(usuario[i].ide===identificacion){
        document.getElementById("body").innerHTML = `
        <div id="body" style="">
        <div class="modal-body container">
            <form id="formulario">
                <h5 class="card-title ">Editar Empleador</h5>
                <p class="card-text bg-success"></p>
                <div class="row">
                <div class="mb-3 col-6">
                  <label for="regimen" class="form-label">Tipo ID</label>
                  <select name="" id="ttipo" class="form-control">
                    <option value="cc">Cedula Ciudadania</option>
                    <option value="ti">Targeta Identidad</option>
                    <option value="ce">Cedula Extrangera</option>
                    <option value="rc">Registro Civil</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div class="mb-3 col-6">
                    <label for="identificacion" class="form-label">Identificacion</label>
                    <input type="number" class="form-control" id="iid" placeholder="identificacion" value="${usuario[i].ide}">
                  </div>
                <div class="mb-3">
                  <label for="nombre" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="nnombre" placeholder="Nombre" value="${usuario[i].nom}">
                </div>
                <div class="mb-3 col-4">
                  <label for="empresa" class="form-label">Empresa</label>
                  <input type="text" class="form-control" id="eempresa" placeholder="Empresa" value="${usuario[i].emp}">
                </div>
                <div class="mb-3 col-4">
                  <label for="direccion" class="form-label">Direccion</label>
                  <input type="text" class="form-control" id="ddireccion" placeholder="Direccion" value="${usuario[i].dir}">
                </div>
                <div class="mb-3 col-4">
                    <label for="postal" class="form-label">Codigo Postal</label>
                    <input type="number" class="form-control" id="ppostal" placeholder="Codigo Postal" value="${usuario[i].pos}">
                  </div>
                  <div class="mb-3 col-4">
                    <label for="celular" class="form-label">Numero</label>
                    <input type="text" class="form-control" id="nnumero" placeholder="Numero" value="${usuario[i].num}">
                  </div>
                  <div class="mb-3 col-8">
                    <label for="correo" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="ccorreo" placeholder="Correo" value="${usuario[i].cor}">
                  </div>
                <div class="mb-3 col-6">
                  <select name="" id="rregimen" class="form-select">
                    <option selected>Regimen</option>
                    <option value="contributivo">contributivo</option>
                    <option value="especial">especial</option>
                    <option value="subsidiado">subsidiado</option>
                  </select>
                </div>
                <div class="mb-3 col-6">
                  <select name="" id="ccity" class="form-select">
                    <option selected>Ciudad</option>
                    <option value="monteria">monteria</option>
                    <option value="cali">cali</option>
                    <option value="cartagena">cartagena</option>
                  </select>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1 required">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <div class="mt-4 d-grid gap-2 d-md-flex justify-content-md-end">
                  <input type="submit" class="btn btn-primary"  onclick="actualizar(${i})" value="Actualizar">
                  <td><button class="btn btn-danger">Cancelar</button></td></div>
              </div> </form>
        </div>
      </div>`
    }
    div.style = 'block';
   }
}

function actualizar(i){
    let usuario=JSON.parse(localStorage.getItem("Empleado"));
    usuario[i].ti = document.getElementById("ttipo").value;
    usuario[i].ide = document.getElementById("iid").value;
    usuario[i].nom = document.getElementById("nnombre").value;
    usuario[i].emp = document.getElementById("eempresa").value;
    usuario[i].dir = document.getElementById("ddireccion").value;
    usuario[i].pos = document.getElementById("ppostal").value;
    usuario[i].num = document.getElementById("nnumero").value;
    usuario[i].cor = document.getElementById("ccorreo").value;
    usuario[i].reg = document.getElementById("rregimen").value;
    usuario[i].ci = document.getElementById("ccity").value;
    localStorage.setItem("Empleado",JSON.stringify(usuario));
}

function eliminar(identificacion){
    let usuario=JSON.parse(localStorage.getItem("Empleado"));
    for(let i=0;i<usuario.length;i++){
        if(usuario[i].ide == identificacion){
            usuario.splice(i,1);
            toas();
        }
    }
    localStorage.setItem("Empleado",JSON.stringify(usuario));
    mostrar();
}
function eliminarTodo(){
  let usuario=JSON.parse(localStorage.getItem("Empleado"));
  usuario.splice(0,usuario.length);
  localStorage.setItem("Empleado",JSON.stringify(usuario));
  toas();
  mostrar();
}
function toas(){
  var toastTrigger = document.getElementById('liveToastBtn')
  var toastLiveExample = document.getElementById('liveToast')
  if(toastTrigger){ 
      var toast = new bootstrap.Toast(toastLiveExample)
      toast.show()  
  }  
}
