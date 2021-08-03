import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetails } from './course.model';
import { CourseService } from '../../services/course.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { FileInputConfig, NGX_MAT_FILE_INPUT_CONFIG } from 'ngx-material-file-input';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  alert: boolean = false;
  teacherId: string;
  subject: string;
  filepath: File = null;

  constructor(private route: ActivatedRoute,
    private readonly router: Router,
    private readonly courseService: CourseService,
    private readonly teacherService: TeacherService) { }

  formGroup: FormGroup = new FormGroup({
    lessonname: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    month: new FormControl('', [Validators.required]),
    week: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    filepath: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });
  myControl1 = new FormControl();
  year: String[] = ['2020', '2021', '2022', '2023'];

  myControl2 = new FormControl();
  type: String[] = ['Theory', 'Revision'];

  myControl3 = new FormControl();
  months: String[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];

  myControl4 = new FormControl();
  week: String[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

  logout() {
    this.teacherService.logout().subscribe(data => {
      if (data) {
        this.router.navigate(['login']);
      } else {
        window.alert('Logout error')
      }
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.teacherId = params['id'];
      // In a real app: dispatch action to load the details here.
    });
    this.teacherService.getTeacherById(this.teacherId).subscribe((data: any) => {
      this.subject = data.subject;
    });
  }

  goToAccount() {
    this.router.navigate(['teacher-profile/', this.teacherId]);
  }

  upload() {
    let course: CourseDetails = {
      teacherId: this.teacherId,
      lessonname: this.formGroup.value.lessonname,
      year: this.formGroup.value.year,
      type: this.formGroup.value.type,
      month: this.formGroup.value.month,
      week: this.formGroup.value.week,
      price: this.formGroup.value.price,
      filepath: this.formGroup.value.filepath,
      description: this.formGroup.value.description,
      subject: this.subject
    };
    console.log("TeacherDashboardComponent -> upload -> course", course);
    this.courseService.save(course).subscribe(data => {
      console.log("StudentRegisterComponent -> register -> data", data)
      this.alert = true;
      this.formGroup.reset({});
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
export const config: FileInputConfig = {
  sizeUnit: 'Octet'
};

// add with module injection
providers: [{ provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config }];
