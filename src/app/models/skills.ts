export class Skills {
    id?: number;
    urlimagen: string;
    nombre: string;
    descripcion: string;
    porcentaje: number;

    constructor (urlimagen: string, nombre: string, descripcion: string, porcentaje: number){
        this.urlimagen = urlimagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.porcentaje = porcentaje;
    }
    
}
