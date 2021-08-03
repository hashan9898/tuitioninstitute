import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Institute } from '../components/institute-register/institute.model';

interface myData {
  success: boolean,
  message: string
}

@Injectable()
export class InstituteService {

private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

  register(institute: Institute) {
    return this.http.post('http://localhost:3000/api/institute-register', institute)
  }
  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/api/institute-login', { email, password })
  }
  logout() {
    return this.http.get('http://localhost:3000/api/institute-logout')
  }
}
