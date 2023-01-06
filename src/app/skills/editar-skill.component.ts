import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Skills } from '../models/skills';
import { SkillsService } from '../service/skills.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent {
  @Input () skill: any;
  @Output() closeediting = new EventEmitter();

  habilidades: Skills = null;
  public isLogged = false;

  constructor(
    
    private skillsService: SkillsService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router:Router
    ) { }

  ngOnInit() {
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
    // const id = this.activatedRoute.snapshot.params['id'];
    // this.skillsService.detailhab(id).subscribe(
    //   data => {
    //     this.habilidades = data;
    //   },
    //   err => {
    //     this.toastr.error(err.error.mensaje, 'Fail',{
    //       timeOut: 3000, positionClass: 'toast-top-center',
    //     });
    //     this.router.navigate(['/']);
    //   }
    // );
  }

  onUpdate(): void {
    this.skillsService.update(this.skill.id, this.skill).subscribe(
      data => {
        this.toastr.success('Habilidad actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
    this.closeediting.emit(false)
  }

}


