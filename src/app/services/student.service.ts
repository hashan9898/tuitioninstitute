import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../components/student-register/student.model';

interface currentStudentData {
  status: boolean,
  data: any
}

interface myData {
  success: boolean,
  message: string
}

@Injectable()
export class StudentService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

  getCurrentStudentData() {
    return this.http.get<currentStudentData>('http://localhost:3000/api/current-student-data')
  }

  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/api/student-login', { email, password })
  }

  logout() {
    return this.http.get('http://localhost:3000/api/student-logout')
  }

  register(student: Student) {
    return this.http.post('http://localhost:3000/api/student-register', student)
  }
  update(id: string, student: Student) {
    return this.http.put('http://localhost:3000/api/student/' + id, student)
  }
  getStudentById(studentId: string){
    return this.http.get('http://localhost:3000/api/students/' + studentId);
  }
}
