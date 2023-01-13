export class Education {
    id?: number;
    titulo: string;
    fecha: string;
    institucion: string;
    descripcion: string;

    constructor (titulo: string, fecha: string, institucion: string, descripcion: string){
        this.titulo = titulo;
        this.fecha = fecha;
        this.institucion = institucion;
        this.descripcion = descripcion;
    }
    
}
