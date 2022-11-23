

function getMiPerfil() {
    
    const usuarioGuardado = sessionStorage.getItem("miUsuario")

    if(!usuarioGuardado){
        setTimeout(() => {
            alert("No has iniciadio sesión!")
        }, 20);
    }else{
        const miUsuario = JSON.parse(usuarioGuardado)
        fetch('http://localhost:8080/gestor/' + miUsuario.id)
        .then(response => response.json())
        .then(gestor => {
          
            
            const contenedorUsuario = document.getElementById("contenedor-usuario");
            contenedorUsuario.innerHTML = gestor.usuario
            
            const contenedorId = document.getElementById("contenedor-id");
            contenedorId.innerHTML += gestor.id
            
            const contenedorCorreo = document.getElementById("contenedor-correo");
            contenedorCorreo.innerHTML += gestor.correo
            
            const contenedorPassword = document.getElementById("contenedor-password");
            contenedorPassword.innerHTML += gestor.password

            const imgGestor = document.getElementById("imgGestor")
            imgGestor.setAttribute("src", `http://xsgames.co/randomusers/assets/avatars/pixel/${gestor.id}.jpg`)
 
        })
        clickLogOut();
    }
}
getMiPerfil()

function clickLogOut(){
    const botonLogout = document.getElementById("btn-logout");

    botonLogout.addEventListener("click", (_event) => {
        sessionStorage.clear();
        alertCreado = document.getElementById("alertCreado")
        alertCreado.setAttribute("style", "display: block")
        
        setTimeout(() => {
            alertCreado.setAttribute("style", "display: none")

            window.location.href = '/';
        }, 1500);


    })
}

