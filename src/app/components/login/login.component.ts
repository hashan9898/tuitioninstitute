import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { StudentService } from 'src/app/services/student.service';
import { InstituteService } from 'src/app/services/institute.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  teacherlogin() {
    this.teacherService.login(this.formGroup.value.email, this.formGroup.value.password).subscribe((data: any) => {
      if (data) {
        this.router.navigate(['teacher-dashboard', data._id]);
        this.teacherService.setLoggedIn(true)
      } else {
        window.alert('No teacher found')
      }
    })
    console.log("log success");
  }

  studentlogin() {
    this.studentService.login(this.formGroup.value.email, this.formGroup.value.password).subscribe((data: any) => {
      if (data) {
        this.router.navigate(['student-dashboard', data._id]);
        this.studentService.setLoggedIn(true)
      } else {
        window.alert('No student found')
      }
    })
  }

  institutelogin(){
    this.instituteService.login(this.formGroup.value.email, this.formGroup.value.password).subscribe((data: any) => {
      if (data) {
        this.router.navigate(['institute-dashboard', data._id]);
        this.instituteService.setLoggedIn(true)
      } else {
        window.alert('No institute member found')
      }
    })
  }

  constructor(private readonly studentService: StudentService,
              private readonly teacherService: TeacherService,
              private readonly instituteService: InstituteService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

}
