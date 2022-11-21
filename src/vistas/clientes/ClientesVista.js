import Vista from "../Vista.js";


export default class extends Vista {

    constructor() {
        super()        
        this.setTitulo("Clientes")
    }

    async getHTML() {
        super.getHTML("/clientes/clientes.html", 
                      "/clientes/clientes.js")
    }
}