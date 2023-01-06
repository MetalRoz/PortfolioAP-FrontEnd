import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLogged = false;

  constructor() { }

  ngOnInit(): void {
    this.isLogged = JSON.parse(localStorage.getItem("isLog"))
  }

  logout(){
    localStorage.removeItem("isLog")
    window.location.reload()
  }

}