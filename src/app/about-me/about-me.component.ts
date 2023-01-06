import { Component, OnInit } from '@angular/core';
import { Aboutme } from '../models/aboutme';
import { AboutmeService } from '../service/aboutme.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  sobremi: Aboutme[] = [];
  Aboutme: any;
  isediting = false;
  public isLogged = false;
  constructor(private aboutmeService: AboutmeService) { }

  ngOnInit(): void {
    this.cargarAboutme();
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }

  cargarAboutme(): void {
    this.aboutmeService.lista().subscribe(
      data => {
        this.sobremi = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
