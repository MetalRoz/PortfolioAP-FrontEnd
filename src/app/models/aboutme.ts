export class Aboutme {
    id?: number;
    nombre: string;
    ocupacion: string;
    descripcion: string;
    urlimagen: string;

    constructor (nombre: string, ocupacion: string, descripcion: string, urlimagen: string){
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.descripcion = descripcion;
        this.urlimagen = urlimagen;
    }
    
}