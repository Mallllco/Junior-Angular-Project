import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';
import { HttpcallService } from 'src/app/Shared/services/httpcall.service';
import { Course } from 'src/app/models/course.model';
import { Lesson } from 'src/app/models/lesson.model';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/Shared/services/courses.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss'],
})
export class DettagliComponent {
  constructor(
    private _managerCourses: CoursesService,
    private _route: ActivatedRoute
  ) {}

  courseList$: Observable<Course[]> = new Observable<Course[]>();
  lessonList$: Observable<Lesson[]> = new Observable<Lesson[]>();
  displayMessage = 'Non sono stati trovati corsi';
  displayMessageLessons = 'Non sono state trovate lezioni';

  ngOnInit(): void {
    this._route.params.subscribe((res: any) => {
      this.lessonList$ = this._managerCourses.retrieveCourseLessons(res.id);
    });
    this.courseList$ = this._managerCourses.retrieveRecentCourses();
  }
}
