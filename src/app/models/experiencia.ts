export class Experiencia {
    id?: number;
    urlimagen: string;
    titulo: string;
    fecha: string;
    descripcion: string;

    constructor (urlimagen: string, titulo: string, fecha: string, descripcion: string){
        this.urlimagen = urlimagen;
        this.titulo = titulo;
        this.fecha = fecha;
        this.descripcion = descripcion;
    }
    
}