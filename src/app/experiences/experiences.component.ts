import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../service/experiencia.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  
  experiencias: Experiencia[] = [];
  Experiencia: any;
  isediting = false;
  public isLogged = false;

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }

  cargarExperiencia(): void {
    this.experienciaService.listaexp().subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.experienciaService.delete(id).subscribe(
      data => {
        this.toastr.success('Experiencia Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarExperiencia();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
