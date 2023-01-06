import { Component, EventEmitter, Output } from '@angular/core';
import { ExperienciaService } from '../service/experiencia.service';
import { Experiencia } from '../models/experiencia';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-exp',
  templateUrl: './agregar-exp.component.html',
  styleUrls: ['./agregar-exp.component.css']
})
export class AgregarExpComponent {

titulo = '';
descripcion = '';
public isLogged = false;

constructor(
  private experienciaService: ExperienciaService,
  private toastr: ToastrService,
  private router: Router
  ) { }

ngOnInit() {
  this.isLogged = JSON.parse(localStorage.getItem("isLog"))
}

onCreate(): void {
  const experiencia = new Experiencia(this.titulo, this.descripcion);
  this.experienciaService.save(experiencia).subscribe(
    data => {
      this.toastr.success('Experiencia Creado', 'OK', {
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
