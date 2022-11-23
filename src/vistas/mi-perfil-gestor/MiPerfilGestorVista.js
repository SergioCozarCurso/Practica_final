import Vista from "../Vista.js";


export default class extends Vista {

    usuarioGuardado = JSON.parse(sessionStorage.getItem("miUsuario"));

    constructor() {
        super()        
        this.setTitulo(`Mi perfil - ${this.usuarioGuardado.usuario}`)
    }

    async getHTML() {
        super.getHTML("/mi-perfil-gestor/mi-perfil.html", 
                      "/mi-perfil-gestor/mi-perfil.js")
    }
}