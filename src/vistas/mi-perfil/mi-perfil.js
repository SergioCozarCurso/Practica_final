

function getMiPerfil() {
    const idGestor = 1;


    fetch('http://localhost:8080/gestor/' + idGestor)
        .then(response => response.json())
        .then(gestor => {
            console.log("gestor: ", gestor);

            const contenedorUsuario = document.getElementById("contenedor-usuario");
            contenedorUsuario.innerHTML = gestor.usuario

            const contenedorCorreo = document.getElementById("contenedor-correo");
            contenedorCorreo.innerHTML = gestor.correo
        })
}
getMiPerfil()