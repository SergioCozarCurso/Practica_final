import Vista from "../Vista.js";


export default class extends Vista {

    constructor() {
        super()        
        this.setTitulo("Mi Perfil")
    }

    async getHTML() {
        super.getHTML("/mi-perfil-gestor/mi-perfil.html", 
                      "/mi-perfil-gestor/mi-perfil.js")
    }
}