import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseService } from 'src/app/services/course.service';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  courses: any[] = [];
  teacherMap: Map<string, any> = new Map();
  courseId: string;

  constructor(private courseservice: CourseService,
              private teacherService: TeacherService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      // In a real app: dispatch action to load the details here.
    });
    this.courseservice.getAllCources().subscribe(prods => {
      this.courses = prods as any;
      const teacherIds: string[] = this.courses.map(course => course.teacherId);
      teacherIds.forEach(id => {
        this.teacherService.getTeacherById(id).subscribe((data: any) => {
          this.teacherMap.set(id, data);
        });
      })
    });
  }
  selectLesson() {
    this.router.navigate(['/single-lesson']);
  }
}
export class TabGroupBasicExample {}
