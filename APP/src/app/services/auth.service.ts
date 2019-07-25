import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
//import { tap } from 'rxjs/operators';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
//mport { User } from '../models/user';
import { map, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Registro } from './../models/registro';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token:any;

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) { }

  /*getlogin(email: String,password:String) {
    return this.http.post(`http://127.0.0.1:1880/usuario`,{email: email, password: password})
      .pipe(map((res: any) => <User>res));
  } */


  /*login(email: String, password: String) {
   return this.http.post(this.env.API_URL + 'auth/login/',
     {email: email, password: password}
    ).pipe(
      tap(token => {
        this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }*/


  API_URL='http://127.0.0.1:1880/';
  holi(mensaje) {
    console.log("la madre");
    return this.http.get(this.API_URL + 'register/' + mensaje).
    pipe(map( (res:any)=> <Registro[]>res));
    console.log("la madre x2");

  }

  //logout() {
  //  const headers = new HttpHeaders({
  //    'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  //  });
  //
  //  return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
  //  .pipe(
  //    tap(data => {
  //      this.storage.remove("token");
  //      this.isLoggedIn = false;
  //      delete this.token;
  //      return data;
  //    })
  //  )
  //}

  /*user() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });

    return this.http.get<User>(this.env.API_URL + 'Users/', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;

        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }*/
}