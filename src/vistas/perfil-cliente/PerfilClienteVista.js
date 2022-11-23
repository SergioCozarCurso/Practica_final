import Vista from "../Vista.js";


export default class extends Vista {

    
    constructor() {
        super()        

        const querystring = window.location.search
        const params = new URLSearchParams(querystring)
        let idCliente = params.get("idCliente")

        if(!idCliente){
            this.setTitulo(`Perfil cliente`)
        }else{
            fetch('http://localhost:8080/cliente/' + idCliente)
            .then(response => response.json())
            .then(cliente => {
                this.setTitulo(`Perfil cliente - ${cliente.usuario}`)
            })
        }
   
    }


    

    async getHTML() {
        super.getHTML("/perfil-cliente/perfil-cliente.html", 
                      "/perfil-cliente/perfil-cliente.js")
    }
}