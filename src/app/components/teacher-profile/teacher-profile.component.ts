import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { Teacher } from '../teacher-register/teacher.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  teacher: any;
  url: any;
  fileToUpload: File = null;
  imageUrl: string = "/assets/img/default-image.png";

  handleFileInput(file : FileList){
this.fileToUpload = file.item(0);

  var reader = new FileReader();
  reader.onload = (event:any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
  }


  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    oldpassword: new FormControl(''),
    newpassword: new FormControl(''),
    image: new FormControl('')
  });


  update() {
    const oldpassword = this.formGroup.value.oldpassword;
    const teacher: Teacher = {
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      password: this.teacher.password,
      phone: this.formGroup.value.phone,
      subject: this.teacher.subject,
      medium: this.teacher.medium,
      image: this.formGroup.value.image
    };

    if (oldpassword) {
      if (oldpassword !== this.teacher.password) {
        window.alert('Old password is wrong');
      } else {
        let updatedTeacher: Teacher = {
          ...teacher,
          password: this.formGroup.value.newpassword,
        };

        this.teacherService.update(this.teacher._id, updatedTeacher).subscribe(data => {
          this.teacher = data;
          this.setValues(data);
        });
      }
    }

    this.teacherService.update(this.teacher._id, teacher).subscribe(data => {
    console.log("TeacherProfileComponent -> update -> data", data)
      this.teacher = data;
      this.setValues(data);
    });
  }

  private setValues(data: any) {
    this.formGroup.patchValue({ name: data.name });
    this.formGroup.patchValue({ email: data.email });
    this.formGroup.patchValue({ phone: data.phone });
    this.formGroup.patchValue({ image: data.imageUrl})
  }

  constructor(private teacherService: TeacherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const teacherId = params['id'];
      this.teacherService.getTeacherById(teacherId).subscribe((data: any) => {
        this.teacher = data;
        this.setValues(data);
      });
   });
  }
}
