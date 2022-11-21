
function escucharClickBoton(){

    const botonGuardar = document.getElementById("btn-guardar-gestor");

  
    botonGuardar.addEventListener("click", (_event) => {

        let usuarioInput = document.querySelector("[name='usuario']")
        let passwordInput = document.querySelector("[name='password']")
        let correoInput = document.querySelector("[name='correo']")

        const nuevoGestor = {
            usuario: usuarioInput.value,
            password: passwordInput.value,
            correo: correoInput.value
        }
    
        const optionsPost = {
            method: 'POST',
            body: JSON.stringify(nuevoGestor),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }

        let respuestaContainer;
    
        fetch('http://localhost:8080/gestor', optionsPost)
            .then(response => response.json())
            .then(gestor => {
           
                alertCreado = document.getElementById("alertCreado")
                alertCreado.setAttribute("style", "display: block")
                
                setTimeout(() => {
                    alertCreado.setAttribute("style", "display: none")
                }, 1500);
            })

    })
    
}
escucharClickBoton();