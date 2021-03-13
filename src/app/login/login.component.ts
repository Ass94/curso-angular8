import { Component } from '@angular/core';
import { Usuario } from '../model/usuario';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  usuario: Usuario = {email: '', senha: ''};

  constructor(
    private service: LoginService,
    private router: Router) { }

  login() {
    this.service.login(this.usuario)
    .subscribe(response => {
      this.service.loginSucesso(response.headers.get('Authorization'));
      this.router.navigate(['home']);
    },
    error => {
      alert('Acesso negado!')
    });
  }





}
