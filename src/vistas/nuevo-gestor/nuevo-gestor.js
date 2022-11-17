
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
                console.log({gestor});
                respuestaContainer = document.getElementById("respuesta-container")
                respuestaContainer.innerHTML = `
                    <h3>Gestor creado: </h3>
                    <p>Id: ${gestor.id}</p>
                    <p>Usuario: ${gestor.usuario}</p>
                    <p>Password: ${gestor.password}</p>
                    <p>Correo: ${gestor.correo}</p>
                `;
            })

    })
    
}
escucharClickBoton();