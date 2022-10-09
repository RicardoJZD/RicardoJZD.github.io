document.getElementById("formulario").addEventListener("submit",crear);
function crear(e){
    tipo_identificacion=document.querySelector('#tdoc').value;
    numero_identidad=document.querySelector('#numero').value;
    nombres=document.querySelector('#nombre').value;
    direction=document.querySelector('#direccion').value;
    zona=document.querySelector('#barrio').value;
    city=document.querySelector('#ciudad').value;
    email=document.querySelector('#correo').value;
    campus=document.querySelector('#sede').value;

    let arrayIndependiente={
        tipo_identificacion,
        numero_identidad,
        nombres,
        direction,
        zona,
        city,
        email,
        campus};
    
    if(localStorage.getItem("Independientes")===null){
        let objInde=[];
        objInde.push(arrayIndependiente);
        localStorage.setItem("Independientes",JSON.stringify(objInde));
    }else{
        let objInde = JSON.parse(localStorage.getItem("Independientes"));
        objInde.push(arrayIndependiente);
        localStorage.setItem("Independientes",JSON.stringify(objInde));    
    }
    debugger;
    mostrar();
    document.getElementById("formulario").reset();
    e.preventDefault();
    console.log("Creado");
}

function mostrar(){
    let objInde = JSON.parse(localStorage.getItem("Independientes"));
    document.getElementById("tbody").innerHTML="";
    for(let i=0;i<objInde.length;i++){
        let tipo_identificacion=objInde[i].tipo_identificacion;
        let numero_identidad=objInde[i].numero_identidad;
        let nombres=objInde[i].nombres;
        let direction=objInde[i].direction;
        let zona=objInde[i].zona;
        let city=objInde[i].city;
        let email=objInde[i].email;
        let campus=objInde[i].campus;
        document.getElementById("tbody").innerHTML +=
        `<tr>
            <td>${tipo_identificacion}</td>
            <td>${numero_identidad}</td>
            <td>${nombres}</td>
            <td>${direction}</td>
            <td>${zona}</td>
            <td>${city}</td>
            <td>${email}</td>
            <td>${campus}</td>
            <td><button class="btn btn-primary" onclick="editar('${numero_identidad}')">Edit</button>
            <button class="btn btn-danger" onclick="eliminar('${numero_identidad}')">Delete</button></td>
        `
    }
}
mostrar();

function eliminar(numero_identidad){
    let arrayIndependiente=JSON.parse(localStorage.getItem("Independientes"));
    let i=0;    
        while(i<arrayIndependiente.length){
            if(arrayIndependiente[i].numero_identidad == numero_identidad){
                arrayIndependiente.splice(i,1);
                toas();
        }
        localStorage.setItem("Independientes", JSON.stringify(arrayIndependiente));
        mostrar();
    }
}

function editar(numero_identidad){
    var div=document.getElementById("body");
    let arrayIndependiente=JSON.parse(localStorage.getItem("Independientes"));
    for(let i=0;i<arrayIndependiente.length;i++){
        //corregir la funcion editar y terminar la funcion eliminar la de login y corregirpara los select
        if(arrayIndependiente[i].numero_identidad===numero_identidad){
            document.getElementById("body").innerHTML = `
    <form id="formulario" class="container">
        <h5 class="card-title ">Aficiliacion por empleado</h5>
        <p class="card-text bg-success"></p>
        <div class="row">
            <div class="mb-3 col-6">
                <label for="identificacion" class="form-label">Tipo Identificacion</label>
                <select name="" id="ttdoc" class="form-select">
                    <option value="cc">Cedula Ciudadaniea</option>
                    <option value="ce">Cedula Extranjera</option>
                    <option value="ti">Tarjeta Identidad</option>
                    <option value="rc">Registro Civil</option>
                    <option value="otro">otro</option>
                  </select>
            </div>
            <div class="mb-3 col-6">
                <label for="numero" class="form-label">Numero</label>
                <input type="number" class="form-control" id="nnumero" placeholder="Numero de id" value="${arrayIndependiente[i].numero_identidad}">
            </div>
            <div class="mb-3 col-6">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nnombre" value="${arrayIndependiente[i].nombres}" placeholder="Nombre">
            </div>
            <div class="mb-3 col-6">
                <label for="direccion" class="form-label">Direccion</label>
                <input type="text" class="form-control" id="ddireccion" placeholder="Direccion" value="${arrayIndependiente[i].direction}">
            </div>
            <div class="mb-3 col-6">
                <label for="barrio" class="form-label">Barrio</label>
                <input type="text" class="form-control" id="bbarrio" placeholder="Barrio" value="${arrayIndependiente[i].zona}">
            </div>
            <div class="mb-3 col-6">
                <label for="ciudad" class="form-label">Ciudad</label>
                <select name="" id="cciudad" class="form-select">
                    <option value="monteria">Monteria</option>
                    <option value="bogota">Bogota</option>
                    <option value="Barranquilla">Barranquilla</option>
                    <option value="cali">Cali</option>
                    <option value="otro">otro</option>
                  </select>
            </div>
            <div class="mb-3 col-6">
                <label for="correo" class="form-label">Email</label>
                <input type="email" class="form-control" id="ccorreo" placeholder="example@example.com" value="${arrayIndependiente[i].email}">
            </div>
            
            <div class="mb-3 col-6">
                <label for="sede" class="form-label">Sede</label>
                <select name="" id="ssede" class="form-select">
                    <option value="monteria">Monteria</option>
                    <option value="bogota">Bogota</option>
                    <option value="barranquilla">Barranquilla</option>
                    <option value="cali">Cali</option>
                    <option value="otro">otro</option>
                  </select>
            </div>
        </div>
        <input type="submit" class="btn btn-primary" onclick="actualizar(${i})" value="Actualizar">
        <td><button class="btn btn-danger">Cancelar</button></td>
      </form>
    </div>`
        }div.style="block";
    }
}

function actualizar(i){
    let arrayIndependiente=JSON.parse(localStorage.getItem("Independientes"));
        arrayIndependiente[i].tipo_identificacion=document.querySelector("#ttdoc").value;
        arrayIndependiente[i].numero_identidad=document.querySelector("#nnumero").value;
        arrayIndependiente[i].nombres=document.querySelector("#nnombre").value;
        arrayIndependiente[i].direction=document.querySelector("#ddireccion").value;
        arrayIndependiente[i].zona=document.querySelector("#bbarrio").value;
        arrayIndependiente[i].city=document.querySelector("#cciudad").value;
        arrayIndependiente[i].email=document.querySelector("#ccorreo").value;
        arrayIndependiente[i].campus=document.querySelector("#ssede").value;
        localStorage.setItem("Independientes",JSON.stringify(arrayIndependiente));

    }

function eliminarTodo(){
    let arrayIndependiente=JSON.parse(localStorage.getItem("Independientes"));
    arrayIndependiente.splice(0,arrayIndependiente.length);
    localStorage.setItem("Independientes",JSON.stringify(arrayIndependiente));
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