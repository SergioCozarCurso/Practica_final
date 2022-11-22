

function getMensajes() {
    
    const enviadosContainer = document.getElementById("enviados-container")
    const recibidosContainer = document.getElementById("recibidos-container")

    const gestor = JSON.parse(sessionStorage.getItem("miUsuario"))

    fetch('http://localhost:8080/mensaje')
        .then(response => response.json())
        .then(mensajes => {

            mensajes.forEach(mensaje => {

                console.log(mensaje);

                if(mensaje.gestorOrigen.id == gestor.id){
                    enviadosContainer.innerHTML += 
                    `
                    <li class="list-group-item p-2">
                    <b> Destinatario:</b> ${mensaje.gestorDestino.usuario}.<br>
                    <b> Fecha:</b> ${mensaje.fecha}.<br><br>
                    <b> Mensaje: </b> ${mensaje.texto}.
                    </li>
                    `
                }

                if(mensaje.gestorDestino.id == gestor.id){
                    recibidosContainer.innerHTML += 
                    `
                    <li class="list-group-item p-2">
                    <b> Origen:</b> ${mensaje.gestorOrigen.usuario}.<br>
                    <b> Fecha:</b> ${mensaje.fecha}.<br><br>
                    <b> Mensaje: </b> ${mensaje.texto}.
                    </li>
                    `
                }
            });

        
    })
    
}
getMensajes()


function enviarMensaje(){

    const selectorHtml = document.getElementById("selector")
    const form = document.getElementById("form")
    const btnEnviar = document.getElementById("btnEnviar")
    const textarea = document.getElementById("textarea")

    const gestorLogin = JSON.parse(sessionStorage.getItem("miUsuario"))

    return fetch('http://localhost:8080/gestor')
    .then(response => response.json())
    .then(gestores => {

        if(gestores.length<2){
            form.innerHTML = '<p style="color: red;">Se necesitan más gestores para poder enviar mensajes</p>'
            return;
        }

        gestores.forEach(gestor => {

            if(gestor.id != gestorLogin.id){

                selectorHtml.innerHTML += `
                    <option 
                        value="${gestor.id}">
                        ${gestor.usuario}
                     </option>
                `
            }
        })



        btnEnviar.addEventListener("click", (_event) => {

            _event.preventDefault();
    
            const option = selectorHtml.options[selectorHtml.selectedIndex];
            const destinatarioId = option.value;
            const textoMensaje = textarea.value;

            if(textoMensaje.length==0){
                alert("Escriba un mensaje")
                return;
            }
            if(destinatarioId == 0){
                alert("Elija un destinatario")
                return;
            }

            console.log(destinatarioId);

            
        })
       
    })


       
}
enviarMensaje()

 






