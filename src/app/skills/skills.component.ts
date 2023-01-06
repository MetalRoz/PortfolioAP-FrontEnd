import { Component, OnInit } from '@angular/core';
import { Skills } from '../models/skills';
import { SkillsService } from '../service/skills.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: Skills[] = [];
  Skills: any;
  isediting = false;
  public isLogged = false;

  constructor(
    private skillsService: SkillsService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarSkills();
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }

  cargarSkills(): void {
    this.skillsService.listahab().subscribe(
      data => {
        this.skill = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.skillsService.delete(id).subscribe(
      data => {
        this.toastr.success('Habilidad Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarSkills();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}

