import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public alerta = false;

 public usuario = {
    user: '',
    password: ''
  }

  validate = {
    USER: 'wilson',
    PASSWORD: 'wilson0102'
  }

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  Login(){
    if(this.usuario.user == this.validate.USER && this.usuario.password == this.validate.PASSWORD) {
      localStorage.setItem("isLog", JSON.stringify(true))
      this.router.navigate(['/'])
    }
    else{
      this.alerta = true;
    }
  }

}