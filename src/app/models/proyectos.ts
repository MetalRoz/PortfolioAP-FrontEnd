export class Proyectos {
    id?: number;
    urlimagen: string;
    nombre: string;
    urlproyecto: string;
    descripcion: string;

    constructor (urlimagen: string, nombre: string, urlproyecto: string, descripcion: string){
        this.urlimagen = urlimagen;
        this.nombre = nombre;
        this.urlproyecto = urlproyecto;
        this.descripcion = descripcion;

    }
    
}