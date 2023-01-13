import { Component } from '@angular/core';
import { EducationService } from '../service/education.service';
import { Education } from '../models/education';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-education',
  templateUrl: './agregar-education.component.html',
  styleUrls: ['./agregar-education.component.css']
})
export class AgregarEducationComponent {

  titulo = '';
  fecha = '';
  institucion = '';
  descripcion = '';
  public isLogged = false;
  
  constructor(
    private educationService: EducationService,
    private toastr: ToastrService,
    private router: Router
    ) { }
  
  ngOnInit() {
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }
  
  onCreate(): void {
    const education = new Education(this.titulo, this.fecha, this.institucion, this.descripcion);
    this.educationService.save(education).subscribe(
      data => {
        this.toastr.success('Educación Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
  
  }
  
