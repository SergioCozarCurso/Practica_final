
function escucharClickBoton(){

    const botonGuardar = document.getElementById("btn-guardar-cliente");

  
    botonGuardar.addEventListener("click", (_event) => {

        let usuarioInput = document.querySelector("[name='usuario']").value
        let passwordInput = document.querySelector("[name='password']").value
        let correoInput = document.querySelector("[name='correo']").value
        let saldoInput = document.querySelector("[name='saldo']").value
        let idGestorInput = document.querySelector("[name='idGestor']").value

        

        const nuevoCliente = {
            usuario: usuarioInput,
            password: passwordInput,
            correo: correoInput,
            saldo: Number(saldoInput),
            gestor: {id: Number(idGestorInput)}
        }
    
        const optionsPost = {
            method: 'POST',
            body: JSON.stringify(nuevoCliente),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }

        let respuestaContainer;
    
        fetch('http://localhost:8080/cliente', optionsPost)
            .then(response => response.json())
            .then(cliente => {
                respuestaContainer = document.getElementById("respuesta-container")
                respuestaContainer.innerHTML = `
                    <h3>Cliente creado: </h3>
                    <p>Id: ${cliente.id}</p>
                    <p>Usuario: ${cliente.usuario}</p>
                    <p>Password: ${cliente.password}</p>
                    <p>Correo: ${cliente.correo}</p>
                    <p>Saldo: ${cliente.saldo}</p>
                    
                `;
            })
            .catch(err => console.log(err))

    })
    
}
escucharClickBoton();