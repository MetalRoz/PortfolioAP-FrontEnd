export class Education {
    id?: number;
    urlimagen: string;
    titulo: string;
    fecha: string;
    institucion: string;
    descripcion: string;

    constructor (urlimagen: string, titulo: string, fecha: string, institucion: string, descripcion: string){
        this.urlimagen = urlimagen;
        this.titulo = titulo;
        this.fecha = fecha;
        this.institucion = institucion;
        this.descripcion = descripcion;
    }
    
}
