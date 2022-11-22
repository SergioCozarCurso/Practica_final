function mainTransferencias(){
    let transferenciasArr = [];
    const transferenciasContainer = document.getElementById("transferencias-container")


   /*  function imprimirTransferencias(transferencias){
        if(clientes.length>0){
    
            let clientePar = 0;

            clientes.forEach(cliente => {
                clientePar++;
                let img = ''

                if (clientePar%2==0){
                    img = `https://xsgames.co/randomusers/assets/avatars/male/${clientePar}.jpg`
                }else{
                    img = `https://xsgames.co/randomusers/assets/avatars/female/${clientePar}.jpg`
                }

                clientesContainer.innerHTML += `
                    <div class="card m-3 col-6" style="max-width: 540px; border: 1px solid black">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${img}" class="img-fluid" alt="Imagen del cliente">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                 <h5 class="card-title" id="contenedor-usuario">${cliente.usuario}</h5>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item" id="contenedor-id">Id: ${cliente.id}</li>
                                        <li class="list-group-item" id="contenedor-correo">Correo: ${cliente.correo}</li>
                                        <li class="list-group-item" id="contenedor-password">Contraseña: ${cliente.password}</li>
                                    </ul>
                                </div>
                             </div>
                        </div>
                        <div class="d-flex justify-content-end p-1"  style="border-top: 1px solid black;">
                        <button class="btn btn-outline-secondary me-2">Ver transferencias</button>
                            <button class="btn btn-outline-danger">Eliminar</button>
                        </div>
                    </div>
                `
            });
        }else{
            clientesContainer.innerHTML += `<p class="mt-3">No se ha podido encontrar ningún cliente.</p>`
        }
    } */


    function getTransferencias() {
    
        return fetch('http://localhost:8080/transferencia')
        .then(response => response.json())
        .then(transferencias => {
            transferenciasArr = transferencias
            transferenciasContainer.innerHTML = ``
    
            console.log(transferencias);
            //imprimirTransferencias(transferencias);

            transferencias.forEach(transferencia => {

                transferenciasContainer.innerHTML += 
                `
                <li class="list-group-item p-4">
                <b> Id: </b> ${transferencia.id}.
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
    getTransferencias()

 

    /* function getClientesGestor(){

        btnMisClientes.classList.add("active")
        btnAllClientes.classList.remove("active")
        
        clientesContainer.innerHTML = ""

            
        const gestorSesion = JSON.parse(sessionStorage.getItem("miUsuario"))
        let clientesGestor = clientesArr.filter(cliente => cliente.gestor.id == gestorSesion.id)
        
        imprimirClientes(clientesGestor)
    }

    btnMisClientes.addEventListener("click", (_event) => {
        getClientesGestor()
    }) */
}
mainTransferencias()



