import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: User | undefined;

  get User(): User {
    return { ...this._user! };
  }


  constructor(private http: HttpClient) { }
  private baseURL: string = environment.basURL;

  login() {
    return this.http.get<User>(`${this.baseURL}/usuarios/1`)
      .pipe(
        tap(user => this._user = user),
        tap(user => localStorage.setItem('token', user.id))

      )

      ;
  }

  logout() {
    this._user = undefined;
    localStorage.clear();
  }

  veryAuth(): Observable<boolean> {

    return (!localStorage.getItem('token'))
      ? of(false)
      : this.http.get<User>(`${this.baseURL}/usuarios/1`)
        .pipe(
          map(user => { 
            this._user = user;
            return true; })
        );

  }



}
