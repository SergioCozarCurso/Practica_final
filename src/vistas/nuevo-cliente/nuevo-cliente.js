
function escucharClickBoton(){

    const botonGuardar = document.getElementById("btn-guardar-cliente");
  
    botonGuardar.addEventListener("click", (_event) => {

        let usuarioInput = document.querySelector("[name='usuario']").value
        let passwordInput = document.querySelector("[name='password']").value
        let correoInput = document.querySelector("[name='correo']").value
        let saldoInput = document.querySelector("[name='saldo']").value

        let gestor = JSON.parse(sessionStorage.getItem("miUsuario"))        

        const nuevoCliente = {
            usuario: usuarioInput,
            password: passwordInput,
            correo: correoInput,
            saldo: Number(saldoInput),
            gestor: {id: gestor.id}
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
           
                alertCreado = document.getElementById("alertCreado")
                alertCreado.setAttribute("style", "display: block")
                
                setTimeout(() => {
                    alertCreado.setAttribute("style", "display: none")
                }, 1500);
            })
            

    })
    
}
escucharClickBoton();