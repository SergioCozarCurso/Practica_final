

function getMiPerfil() {
    const idGestor = 1;


    fetch('http://localhost:8080/gestor/' + idGestor)
        .then(response => response.json())
        .then(gestor => {
            console.log("gestor: ", gestor);
          
            const contenedorUsuario = document.getElementById("contenedor-usuario");
            contenedorUsuario.innerHTML = gestor.usuario

            const contenedorId = document.getElementById("contenedor-id");
            contenedorId.innerHTML += gestor.id

            const contenedorCorreo = document.getElementById("contenedor-correo");
            contenedorCorreo.innerHTML += gestor.correo

            const contenedorPassword = document.getElementById("contenedor-password");
            contenedorPassword.innerHTML += gestor.password
            
                    

        })
}
getMiPerfil()