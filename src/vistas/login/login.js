
function escucharClickBotonLogin() {

    const botonGuardar = document.getElementById("btn-login")

    botonGuardar.addEventListener("click", (_event) => {

    const correoInput = document.querySelector("[name='usuario']").value;
    const passInput = document.querySelector("[name='password']").value;
    const query = `?correo=${correoInput}&password=${passInput}`

    fetch(`http://localhost:8080/gestor/login${query}`)
    .then(response => response.json())
    .then(gestor => {
        console.log(gestor);
        
     })
})

}
escucharClickBotonLogin();