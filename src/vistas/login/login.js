
function escucharClickBotonLogin() {

    const botonGuardar = document.getElementById("btn-login")

    botonGuardar.addEventListener("click", (_event) => {

    const correoInput = document.querySelector("[name='usuario']").value;
    const passInput = document.querySelector("[name='password']").value;
    const query = `?correo=${correoInput}&password=${passInput}`

    fetch(`http://localhost:8080/gestor/login${query}`)
    .then(response => response.json())
    .then(gestor => {

        if(!gestor){
            alertError = document.getElementById("alertError")
            alertError.setAttribute("style", "display: block")
            
            setTimeout(() => {
                alertError.setAttribute("style", "display: none")
            }, 1500);
                return;
            }
        
        sessionStorage.setItem("miUsuario", JSON.stringify(gestor));

        alertCreado = document.getElementById("alertCreado")
        alertCreado.setAttribute("style", "display: block")
        
        setTimeout(() => {
            alertCreado.setAttribute("style", "display: none")
        }, 1500);

     })
})

}
escucharClickBotonLogin();