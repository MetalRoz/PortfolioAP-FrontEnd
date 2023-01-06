import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aboutme } from '../models/aboutme';
import { AboutmeService } from '../service/aboutme.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit {

 @Input () person: any;
 @Output() closeediting = new EventEmitter();
  sobremi: Aboutme = null;
  public isLogged = false;

  constructor(
    private aboutmeService: AboutmeService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router:Router
    ) { }

  ngOnInit() {
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
    // const id = this.activatedRoute.snapshot.params['id'];
    // this.aboutmeService.detail(id).subscribe(
    //   data => {
    //     this.sobremi = data;
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
    this.aboutmeService.update(this.person.id, this.person).subscribe(
      data => {
        this.toastr.success('Información actualizada', 'OK', {
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
