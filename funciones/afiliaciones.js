document.getElementById("formulario").addEventListener("submit", crear);
function crear(e) {
    tipo = document.getElementById("tdoc").value;
    ide = document.getElementById("id").value;
    nom = document.getElementById("nombre").value;
    espe = document.getElementById("especialidad").value;
    fec = document.getElementById("fecha").value;

    let arrayAfiliaciones = {
        tipo, ide, nom, espe, fec
    };

    if (localStorage.getItem("Afiliaciones") === null) {
        let objAfiliaciones = [];
        objAfiliaciones.push(arrayAfiliaciones);
        localStorage.setItem("Afiliaciones", JSON.stringify(objAfiliaciones));
    } else {
        let objAfiliaciones = JSON.parse(localStorage.getItem("Afiliaciones"));
        objAfiliaciones.push(arrayAfiliaciones);
        localStorage.setItem("Afiliaciones", JSON.stringify(objAfiliaciones));
    }
    mostrar();
    document.getElementById("formulario").reset();
    e.preventDefault();
    console.log("Registro Guardado Correctamente")
}

function mostrar() {
    let objAfiliaciones = JSON.parse(localStorage.getItem("Afiliaciones"));
    document.querySelector("#tbody").innerHTML = "";
    for (let i = 0; i < objAfiliaciones.length; i++) {
        let tip = objAfiliaciones[i].tipo;
        let ident = objAfiliaciones[i].ide;
        let nombre = objAfiliaciones[i].nom;
        let especi = objAfiliaciones[i].espe;
        let fecha = objAfiliaciones[i].fec;
        document.querySelector("#tbody").innerHTML +=
            `<tr>
                <td>${tip}</td>
                <td>${ident}</td>
                <td>${nombre}</td>
                <td>${especi}</td>
                <td>${fecha}</td>
            
            <td><button class="btn btn-primary" onclick="editar('${ident}')">Edit</button>
            <button class="btn btn-danger" onclick="eliminar('${ident}')">Delete</button></td>
            `
    }
}
mostrar();

function editar(ident) {
    var div = document.getElementById("body");
    let objAfiliaciones = JSON.parse(localStorage.getItem("Afiliaciones"));
    for (let i = 0; i < objAfiliaciones.length; i++) {
        if (objAfiliaciones[i].ide === ident) {
            document.getElementById("body").innerHTML = `
            <div id="body" class="container">
            <div class="modal-body">
                <form id="formulario">
                    <h5 class="card-title">Editar Afiliado</h5>
                    <p class="card-text bg-success"></p>
                <div class="row">
                    <div class="mb-3 col-6">
                      <label for="tipo_id" class="form-label">Tipo documento</label>
                      <select name="" id="ttdoc" class="form-select" value="" required>
                        <option value="">${objAfiliaciones[i].tipo}</option>
                        <option value="cc">Cedula Ciudadaniea</option>
                        <option value="ce">Cedula Extranjera</option>
                        <option value="ti">Tarjeta Identidad</option>
                        <option value="rc">Registro Civil</option>
                        <option value="otro">otro</option>
                      </select>
                    </div>
                    <div class="mb-3 col-6">
                        <label for="identificacion" class="form-label">Identificacion</label>
                        <input type="number" class="form-control" id="iid" placeholder="identificacion" value="${objAfiliaciones[i].ide}" required>
                      </div>
                    <div class="mb-3">
                      <label for="nombre" class="form-label">Nombre</label>
                      <input type="text" class="form-control" id="nnombre" placeholder="Nombre" value="${objAfiliaciones[i].nom}" required>
                    </div>
                    <div class="mb-3 col-6">
                      <label for="especialidad" class="form-label">Especialidad</label>
                      <select name="" id="eespecialidad" class="form-select" required>
                        <option value="">${objAfiliaciones[i].espe}</option>
                        <option value="medico_general">Medico General</option>
                        <option value="oftagmologia">Oftagmologia</option>
                        <option value="pediatra">Pediatra</option>
                        <option value="ginecologia">Ginecologia</option>
                        <option value="odontologia">Pediatra</option>
                      </select>
                    </div>
                    <div class="mb-3 col-6">
                        <label for="fecha" class="form-label">Fecha y Hora</label>
                        <input type="datetime-local" class="form-control" id="ffecha" placeholder="Nombre" value="${objAfiliaciones[i].fec}" required>
                    </div>
                </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                      </div>
                      <input type="submit" class="btn btn-primary"  onclick="actualizar(${i})" value="Actualizar">
                      <td><button class="btn btn-danger">Cancelar</button></td>
                  </form>
            </div>
          </div>`
        } div.style = "block";
    }
}

function actualizar(i) {
    let objAfiliaciones=JSON.parse(localStorage.getItem("Afiliaciones"));
        objAfiliaciones[i].tipo = document.getElementById("ttdoc").value;
        objAfiliaciones[i].ide = document.getElementById("iid").value;
        objAfiliaciones[i].nom = document.getElementById("nnombre").value;
        objAfiliaciones[i].espe = document.getElementById("eespecialidad").value;
        objAfiliaciones[i].fecha = document.getElementById("ffecha").value;
    localStorage.setItem("Afiliaciones",JSON.stringify(objAfiliaciones));
    alert("actualizado");
    }

function eliminar(ident){
    let objAfiliaciones=JSON.parse(localStorage.getItem("Afiliaciones"));
    for(let i=0;i<objAfiliaciones.length;i++){
        if(objAfiliaciones[i].ide == ident){
            objAfiliaciones.splice(i,1);
            toas();
        }
    }
    localStorage.setItem("Afiliaciones",JSON.stringify(objAfiliaciones));
    mostrar();
}
function eliminarTodo(){
    let objAfiliaciones=JSON.parse(localStorage.getItem("Afiliaciones"));
    objAfiliaciones.splice(0,objAfiliaciones.length);
    localStorage.setItem("Afiliaciones",JSON.stringify(objAfiliaciones));
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