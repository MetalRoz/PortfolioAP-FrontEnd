import { Component } from '@angular/core';
import { SkillsService } from '../service/skills.service';
import { Skills } from '../models/skills';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: ['./agregar-skill.component.css']
})
export class AgregarSkillComponent {
  urlimagen = '';
  nombre = '';
  descripcion = '';
  porcentaje: number = null;
  public isLogged = false;

constructor(
  private skillsService: SkillsService,
  private toastr: ToastrService,
  private router: Router
  ) { }

ngOnInit() {
  this.isLogged = JSON.parse(localStorage.getItem("isLog"))
}

onCreate(): void {
  const skill = new Skills(this.urlimagen, this.nombre, this.descripcion, this.porcentaje);
  this.skillsService.save(skill).subscribe(
    data => {
      this.toastr.success('Habilidad Creada', 'OK', {
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

