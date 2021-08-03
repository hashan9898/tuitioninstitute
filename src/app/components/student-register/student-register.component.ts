import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from './student.model';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  hide = true;
  chide = true;

  subjects: string[] = ['Biology', 'Maths', 'Commerce', 'Art']
  errorMsg: string = "";

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    cpassword: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl(''),
    subject: new FormControl('', [Validators.required]),
  });

  register() {
    const password = this.formGroup.value.password;
    const cpassword = this.formGroup.value.cpassword

    if (password !== cpassword) {
      window.alert('Password mismatch');
    } else {
      let student: Student = {
        name: this.formGroup.value.name,
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
        mobileNumber: this.formGroup.value.mobileNumber,
        subject: this.formGroup.value.subject,
      };

      this.studentService.register(student).subscribe(data => {
        console.log("StudentRegisterComponent -> register -> data", data)
        this.router.navigate(['login']);
      });
    }
  }
  get email(){return this.formGroup.get('email')}
  get name(){return this.formGroup.get('name')}
  get password(){return this.formGroup.get('password')}
  get phone(){return this.formGroup.get('mobileNumber')}

  constructor(private readonly studentService: StudentService,
              private readonly router: Router) { }

  ngOnInit(): void {

  }

}
