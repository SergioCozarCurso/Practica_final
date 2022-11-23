function mainClientes(){
    let clientesArr = [];
    const clientesContainer = document.getElementById("clientes-container")
    const btnAllClientes = document.getElementById("btnAllClientes")
    const btnMisClientes = document.getElementById("btnMisClientes")

   
   

    function imprimirClientes(clientes){
        if(clientes.length>0){

         
    

            clientes.forEach(cliente => {

                let img = ''

                if (cliente.id%2==0){
                    img = `https://xsgames.co/randomusers/assets/avatars/male/${cliente.id}.jpg`
                }else{
                    img = `https://xsgames.co/randomusers/assets/avatars/female/${cliente.id}.jpg`
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
                            <button class="btn btn-outline-secondary me-2" id="btnTransferencias" 
                                onclick="window.location.href = '/perfil-cliente?idCliente=${cliente.id}&img=${cliente.id}'">
                                Ver perfil cliente
                            </button>
                        </div>
                    </div>
                `
             

            });
        }else{
            clientesContainer.innerHTML += `<p class="mt-3">No se ha podido encontrar ningún cliente.</p>`
        }
    }


    function getClientes() {

        btnMisClientes.classList.remove("active")
        btnAllClientes.classList.add("active")
    
        return fetch('http://localhost:8080/cliente')
        .then(response => response.json())
        .then(clientes => {
            clientesArr = clientes
            clientesContainer.innerHTML = ""
            
        
           imprimirClientes(clientes);
    
           
        })
        
    }
    getClientes()


    function getClientesGestor(){

        btnMisClientes.classList.add("active")
        btnAllClientes.classList.remove("active")
        
        clientesContainer.innerHTML = ""

            
        const gestorSesion = JSON.parse(sessionStorage.getItem("miUsuario"))
        let clientesGestor = clientesArr.filter(cliente => cliente.gestor.id == gestorSesion.id)
        
        imprimirClientes(clientesGestor)
    }

    

    btnMisClientes.addEventListener("click", (_event) => {
        getClientesGestor()
    })

    
}
mainClientes()




