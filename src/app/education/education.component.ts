import { Component, OnInit } from '@angular/core';
import { Education } from '../models/education';
import { EducationService } from '../service/education.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educaciones: Education[] = [];
  Education: any;
  isediting = false;
  public isLogged = false;

  constructor(
    private educationService: EducationService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.cargarEducation();
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }

  cargarEducation(): void {
    this.educationService.listaedu().subscribe(
      data => {
        this.educaciones = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.educationService.delete(id).subscribe(
      data => {
        this.toastr.success('Educación Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarEducation();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}
