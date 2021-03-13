import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalUser } from '../model/local_user';
import { StorageService } from './storage.service';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  helper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private storage: StorageService) { }


  login(usuario: Usuario) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, usuario,
    {
      observe: 'response',
      responseType: 'text'
    });
  }

  loginSucesso(valorAutorizacao: string) {
    let tok = valorAutorizacao.substring(7);
    let user: LocalUser = {
      token: tok,
      email: this.helper.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
  }
}
