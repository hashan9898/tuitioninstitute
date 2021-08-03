import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  name: string = "";
  courses: any[] = [];
  teacherMap: Map<string, any> = new Map();
  studentId: string;
  teacher = '';
  Subject= '';

  logout() {
    this.studentService.logout().subscribe(data => {
      if (data) {
        this.router.navigate(['login']);
      } else {
        window.alert('Logout error')
      }
    })
  }

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  constructor(private readonly studentService: StudentService,
              private readonly teacherService: TeacherService,
              private readonly router: Router,
              private readonly courseService: CourseService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.studentService.getCurrentStudentData().subscribe(resp => {
      if (resp.status) {
        this.name = 'Welcome ' + resp.data.name;
      } else {
        this.logout();
      }
    })
    this.courseService.getAllCources().subscribe(prods => {
      this.courses = prods as any;
      const teacherIds: string[] = this.courses.map(course => course.teacherId);
      teacherIds.forEach(id => {
        this.teacherService.getTeacherById(id).subscribe((data: any) => {
          this.teacherMap.set(id, data);
        });
      })
    });
    this.route.params.subscribe(params => {
      this.studentId = params['id'];
      // In a real app: dispatch action to load the details here.
    });
  }
  goToAccount(){
    this.router.navigate(['student-profile/', this.studentId]);
  }
}
