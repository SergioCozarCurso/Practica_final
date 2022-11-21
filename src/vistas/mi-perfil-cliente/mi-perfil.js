

function getMiPerfil() {
    const idCliente = 1;


    fetch('http://localhost:8080/cliente/' + idCliente)
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
            
                    

        })
}
getMiPerfil()