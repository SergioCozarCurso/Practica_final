function mainClientes(){
    let clientesArr = [];
    const clientesContainer = document.getElementById("clientes-container")
    const btnAllClientes = document.getElementById("btnAllClientes")
    const btnMisClientes = document.getElementById("btnMisClientes")

    function imprimirClientes(clientes){
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
                    <div class="card m-3 col-6" style="max-width: 540px;">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title" id="contenedor-usuario">${cliente.usuario}</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" id="contenedor-id">Id: ${cliente.id}</li>
                            <li class="list-group-item" id="contenedor-correo">Correo: ${cliente.correo}</li>
                            <li class="list-group-item" id="contenedor-password">Password: ${cliente.password}</li>
                        </ul>
                        </div>
                    </div>
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



