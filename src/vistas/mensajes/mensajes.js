

function getMensajes() {
    
    const mensajesContainer = document.getElementById("mensajes-container")
    const enviarMensajeContainer = document.getElementById("enviar-mensaje-container")
    const enviadosContainer = document.getElementById("enviados-container")
    const recibidosContainer = document.getElementById("recibidos-container")
    const mensajeEnviadoAlert = document.getElementById("mensajeEnviadoAlert")

    enviarMensajeContainer.setAttribute("style", "display: none")
    mensajesContainer.setAttribute("style", "display: block")
    mensajeEnviadoAlert.setAttribute("style", "display: none;")

    const gestor = JSON.parse(sessionStorage.getItem("miUsuario"))


    fetch('http://localhost:8080/mensaje')
        .then(response => response.json())
        .then(mensajes => {

            enviadosContainer.innerHTML = ""
            recibidosContainer.innerHTML = ""

            mensajes.forEach(mensaje => {


                if(mensaje.gestorOrigen.id == gestor.id){
                    enviadosContainer.innerHTML += 
                    `
                    <li class="list-group-item p-2">
                    <b><i class="bi bi-envelope-at"></i>  Destinatario:</b> ${mensaje.gestorDestino.usuario}.<br><br>
                    <b><i class="bi bi-calendar-event"></i>   Fecha:</b> ${mensaje.fecha}.<br><br>
                    <b><i class="bi bi-chat-right-text"></i>  Mensaje: </b> ${mensaje.texto}.
                    </li>
                    `
                }

                if(mensaje.gestorDestino.id == gestor.id){
                    recibidosContainer.innerHTML += 
                    `
                    <li class="list-group-item p-2">
                    <b><i class="bi bi-envelope-at"></i> Origen:</b> ${mensaje.gestorOrigen.usuario}.<br><br>
                    <b><i class="bi bi-calendar-event"></i>   Fecha:</b> ${mensaje.fecha}.<br><br>
                    <b><i class="bi bi-chat-right-text"></i>  Mensaje: </b> ${mensaje.texto}.
                    </li>
                    `
                }
            });

        
    })
    
}
getMensajes()


function enviarMensaje(){

    const mensajesContainer = document.getElementById("mensajes-container")
    const enviarMensajeContainer = document.getElementById("enviar-mensaje-container")
    const selectorHtml = document.getElementById("selector")
    const form = document.getElementById("form")
    const btnEnviar = document.getElementById("btnEnviar")
    const textarea = document.getElementById("textarea")
    const mensajeEnviadoAlert = document.getElementById("mensajeEnviadoAlert")


    mensajesContainer.setAttribute("style", "display: none")
    enviarMensajeContainer.setAttribute("style", "display: block")

    const gestorLogin = JSON.parse(sessionStorage.getItem("miUsuario"))

    fetch('http://localhost:8080/gestor')
    .then(response => response.json())
    .then(gestores => {

        if(gestores.length<2){
            form.innerHTML = '<p style="color: red;">Se necesitan más gestores para poder enviar mensajes</p>'
            return;
        }

        selectorHtml.innerHTML = ""

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

            const nuevoMensaje = {
                texto: textoMensaje,
                gestorOrigen: {id: gestorLogin.id},
                gestorDestino: {id: destinatarioId}
            }
        
            const optionsPost = {
                method: 'POST',
                body: JSON.stringify(nuevoMensaje),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }
    
        
            fetch('http://localhost:8080/mensaje', optionsPost)
                .then(response => response.json())
                .then(mensaje => {

                    if(!mensaje){
                        alert("No se ha podido enviar el mensaje")
                        return;
                    }
               
                    mensajeEnviadoAlert.setAttribute("style", "display: block; position: absolute; bottom: 50px; right: 50px;")
                    
                    
                    setTimeout(() => {
                        
                        getMensajes();
                    }, 1500);


                })
        })
    })   
}


 






