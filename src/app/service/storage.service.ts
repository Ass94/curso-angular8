import { Injectable } from '@angular/core';
import { LocalUser } from '../model/local_user';
import { STORAGE_KEY } from '../config/storage_key.config';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

 getLocalUser(): LocalUser {
   let user = localStorage.getItem(STORAGE_KEY.localUser);
   if(user == null) {
     return null;
   } else {
     return JSON.parse(user);
   }
 }

 setLocalUser(user: LocalUser) {
  if(user == null) {
    localStorage.removeItem(STORAGE_KEY.localUser);
  } else {
    localStorage.setItem(STORAGE_KEY.localUser, JSON.stringify(user));
  }
 }

}
