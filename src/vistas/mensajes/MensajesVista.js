import Vista from "../Vista.js";


export default class extends Vista {

    constructor() {
        super()        
        this.setTitulo("Mensajes")
    }

    async getHTML() {
        super.getHTML("/mensajes/mensajes.html", 
                      "/mensajes/mensajes.js")
    }
}