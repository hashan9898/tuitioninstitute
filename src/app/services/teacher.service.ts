import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Teacher } from '../components/teacher-register/teacher.model';

interface myData {
  success: boolean,
  message: string
}

@Injectable()
export class TeacherService {

private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

  register(teacher: Teacher) {
    return this.http.post('http://localhost:3000/api/teacher-register', teacher)
  }

  upload(id: string, image: File) {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    let formData = new FormData();
    formData.append('image', image)
    return this.http.post('http://localhost:3000/api/teacher/' + id + '/upload-photo', formData, config);
  }

  update(id: string, teacher: Teacher) {
    return this.http.put('http://localhost:3000/api/teacher/' + id, teacher)
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/api/teacher-login', { email, password })
  }

  getTeacherById(teacherId: string){
    return this.http.get('http://localhost:3000/api/teachers/' + teacherId);
  }
  logout() {
    return this.http.get('http://localhost:3000/api/student-logout')
  }
}
