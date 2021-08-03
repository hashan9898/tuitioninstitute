import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Teacher} from './teacher.model';
import { Router } from '@angular/router';
import {TeacherService} from './../../services/teacher.service'



@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  hide = true;
  chide = true;

  medium: string[] = ['English', 'Sinhala'];

  constructor(private readonly teacherService: TeacherService,
              private readonly router: Router) { }

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    cpassword: new FormControl('',[Validators.required]),
    mobileNumber: new FormControl(''),
    subject: new FormControl('',[Validators.required]),
    medium: new FormControl(),
    agrement: new FormControl(false, [Validators.requiredTrue])
  })

  ngOnInit(): void {
  }

  register(){

    const password = this.formGroup.value.password;
    const cpassword = this.formGroup.value.cpassword;

    if(password != cpassword){
      window.alert('password mismatch');
    }
    else{
      let teacher: Teacher = {
        name: this.formGroup.value.name,
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
        phone: this.formGroup.value.mobileNumber,
        subject: this.formGroup.value.subject,
        medium: this.formGroup.value.medium,
        image: null
      }

      this.teacherService.register(teacher).subscribe(data => {
        this.router.navigate(['login']);
      });
    }

  }

}
