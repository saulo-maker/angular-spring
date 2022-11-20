import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  courses: Observable<Course[]>;

  displayedColumns = ['name','category'];

  //coursesService: CoursesService;
  constructor(private coursesService: CoursesService) {
    // this.courses = [];
    //this.coursesService = new CoursesService;
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
  }

}
