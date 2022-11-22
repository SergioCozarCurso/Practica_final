import Vista from "../Vista.js";


export default class extends Vista {

    constructor() {
        super()        
        this.setTitulo("Perfil cliente")
    }

    async getHTML() {
        super.getHTML("/perfil-cliente/perfil-cliente.html", 
                      "/perfil-cliente/perfil-cliente.js")
    }
}