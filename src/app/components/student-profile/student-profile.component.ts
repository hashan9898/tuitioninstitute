import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import{ Student } from '../student-register/student.model'

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  student: any;

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    subject: new FormControl(''),
    oldpassword: new FormControl(''),
    newpassword: new FormControl(''),
  });

  update() {
    const oldpassword = this.formGroup.value.oldpassword;
    const student: Student = {
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      password: this.student.password,
      mobileNumber: this.formGroup.value.phone,
      subject: this.student.subject,

    };

    if (oldpassword) {
      if (oldpassword !== this.student.password) {
        window.alert('Old password is wrong');
      } else {
        let updatedStudent: Student = {
          ...student,
          password: this.formGroup.value.newpassword,
        };

        this.studentService.update(this.student._id, updatedStudent).subscribe(data => {
          this.student = data;
          this.setValues(data);
        });
      }
    }

    this.studentService.update(this.student._id, student).subscribe(data => {
      this.student = data;
      this.setValues(data);
    });
  }

  private setValues(data: any) {
    this.formGroup.patchValue({ name: data.name });
    this.formGroup.patchValue({ email: data.email });
    this.formGroup.patchValue({ phone: data.mobileNumber});
    this.formGroup.patchValue({ subject: data.subject });
  }
  constructor(private studentService: StudentService,
              private route: ActivatedRoute) { }

              ngOnInit(): void {
                this.route.params.subscribe(params => {
                  const studentId = params['id'];
                  this.studentService.getStudentById(studentId).subscribe((data: any) => {
                    this.student = data;
                    this.setValues(data);
                  });
               });
              }
}
