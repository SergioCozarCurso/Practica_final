

function getPerfilCliente() {

    const clienteContainer = document.getElementById("cliente-container")
    const seleccionContainer = document.getElementById("seleccion-container")
    const querystring = window.location.search
    const params = new URLSearchParams(querystring)
    let idCliente = params.get("idCliente")
    //let numImg    = params.get("img");


    if(!idCliente){
        clienteContainer.innerHTML = ``
        seleccionarCliente();
        return;
    }
    seleccionContainer.innerHTML = ""
    imprimirFichaCliente(idCliente);
    
    imprimirTransferenciasEnviadas(idCliente);
    imprimirTransferenciasRecibidas(idCliente);
    
}
getPerfilCliente()


function imprimirFichaCliente(id) {

    fetch('http://localhost:8080/cliente/' + id)
        .then(response => response.json())
        .then(cliente => {
          
            const contenedorUsuario = document.getElementById("contenedor-usuario");
            contenedorUsuario.innerHTML = cliente.usuario
            
            const contenedorId = document.getElementById("contenedor-id");
            contenedorId.innerHTML += cliente.id
            
            const contenedorCorreo = document.getElementById("contenedor-correo");
            contenedorCorreo.innerHTML += cliente.correo
            
            const contenedorPassword = document.getElementById("contenedor-password");
            contenedorPassword.innerHTML += cliente.password
            
            const contenedorSaldo = document.getElementById("contenedor-saldo");
            contenedorSaldo.innerHTML += cliente.saldo
            
            const contenedorGestor = document.getElementById("contenedor-gestor");
            contenedorGestor.innerHTML += cliente.gestor.usuario

            const imgHtml = document.getElementById("img")

            let img = ''

            if (cliente.id%2==0){
                img = `https://xsgames.co/randomusers/assets/avatars/male/${cliente.id}.jpg`
            }else{
                img = `https://xsgames.co/randomusers/assets/avatars/female/${cliente.id}.jpg`
            }

            imgHtml.setAttribute("src", img)


        })
}


function imprimirTransferenciasEnviadas(id) {

    const transferenciasEnviadasUl = document.getElementById("transferenciasEnviadas-ul")

    fetch(`http://localhost:8080/transferencia/cliente-ordenante/${id}`)
    .then(response => response.json())
    .then(transferenciasEnviadas => {

        if (transferenciasEnviadas.length == 0){
            transferenciasEnviadasUl.innerHTML = "<p> No se ha enviado ninguna transferencia </p>"
            return;
        }


        transferenciasEnviadas.forEach(transferencia => {

            transferenciasEnviadasUl.innerHTML += 
            `
            <li class="list-group-item p-4">
            <b> Id Transferencia: </b> ${transferencia.id}.
            <b> Importe:</b> ${transferencia.importe}.
            <b> Ordenante:</b> ${transferencia.clienteOrdenante.usuario}.
            <b> Beneficiario:</b> ${transferencia.clienteBeneficiario.usuario}.
            <b> Concepto:</b> ${transferencia.concepto}.
            <b> Fecha:</b> ${transferencia.fecha}.
            </li>
        
            `
            
        });

    }) 
}

function imprimirTransferenciasRecibidas(id) {

    const transferenciasRecibidasUl = document.getElementById("transferenciasRecibidas-ul")

    fetch(`http://localhost:8080/transferencia/cliente-beneficiario/${id}`)
    .then(response => response.json())
    .then(transferenciasRecibidas => {

        if (transferenciasRecibidas.length == 0){
            transferenciasRecibidasUl.innerHTML = "<p> No se ha recibido ninguna transferencia </p>"
            return;
        }


        transferenciasRecibidas.forEach(transferencia => {

            transferenciasRecibidasUl.innerHTML += 
            `
            <li class="list-group-item p-4">
            <b> Id Transferencia: </b> ${transferencia.id}.
            <b> Importe:</b> ${transferencia.importe}.
            <b> Ordenante:</b> ${transferencia.clienteOrdenante.usuario}.
            <b> Beneficiario:</b> ${transferencia.clienteBeneficiario.usuario}.
            <b> Concepto:</b> ${transferencia.concepto}.
            <b> Fecha:</b> ${transferencia.fecha}.
            </li>
        
            `
            
        });

    }) 
}

function seleccionarCliente(){
   
    const seleccionContainer = document.getElementById("seleccion-container")
    const selectorHtml = document.getElementById("selectorHtml")
    const btnVerCliente = document.getElementById("btnVerCliente")

    seleccionContainer.setAttribute("style", "display: none;")

    fetch('http://localhost:8080/cliente')
    .then(response => response.json())
    .then(clientes => {
     
        clientes.forEach(cliente => {

            selectorHtml.innerHTML +=
            `
             <option 
                    value="${cliente.id}" 
                    >
                ${cliente.usuario}
             </option>
            `
        })

        btnVerCliente.addEventListener("click", (_event) => {

            const option = selectorHtml.options[selectorHtml.selectedIndex];
            const id = option.value;
            window.location.href=`/perfil-cliente?idCliente=${id}&img=${id}`
        })
       
    })



}

