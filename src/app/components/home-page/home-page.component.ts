import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/Shared/services/courses.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private _managerCourses: CoursesService) {}

  courseList$: Observable<Course[] | null> = new Observable<Course[]>();
  displayMessage = 'Non sono stati trovati corsi';

  ngOnInit(): void {
    this.courseList$ = this._managerCourses.retrieveRecentCourses();
  }
}
