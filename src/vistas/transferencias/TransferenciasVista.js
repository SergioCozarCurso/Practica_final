import Vista from "../Vista.js";


export default class extends Vista {

    constructor() {
        super()        
        this.setTitulo("Transferencias")
    }

    async getHTML() {
        super.getHTML("/transferencias/transferencias.html", 
                      "/transferencias/transferencias.js")
    }
}