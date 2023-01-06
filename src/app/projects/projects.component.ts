import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../models/proyectos';
import { ProyectosService } from '../service/proyectos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  proyecto: Proyectos[] = [];
  Proyectos: any;
  isediting = false;
  public isLogged = false;

  constructor(
    private proyectosService: ProyectosService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarProyectos();
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }

  cargarProyectos(): void {
    this.proyectosService.listapro().subscribe(
      data => {
        this.proyecto = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.proyectosService.delete(id).subscribe(
      data => {
        this.toastr.success('Proyecto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProyectos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
