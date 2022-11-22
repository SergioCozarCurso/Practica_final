function mainTransferencias(){
    let transferenciasArr = [];
    const transferenciasContainer = document.getElementById("transferencias-container")

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



