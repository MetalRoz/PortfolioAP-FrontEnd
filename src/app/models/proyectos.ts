export class Proyectos {
    id?: number;
    nombre: string;
    urlimagen: string;
    urlproyecto: string;
    descripcion: string;

    constructor (nombre: string, urlimagen: string, urlproyecto: string, descripcion: string){
        this.nombre = nombre;
        this.urlimagen = urlimagen;
        this.urlproyecto = urlproyecto;
        this.descripcion = descripcion;

    }
    
}