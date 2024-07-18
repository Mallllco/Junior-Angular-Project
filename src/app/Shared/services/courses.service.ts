import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  filter,
  iif,
  map,
  of,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { HttpcallService } from './httpcall.service';
import { Course } from 'src/app/models/course.model';
import { Lesson } from 'src/app/models/lesson.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private _coursesListSubject = new BehaviorSubject<Course[] | null>(null);

  public readonly courseListData$ = this._coursesListSubject
    .asObservable()
    .pipe(filter((res) => !!res));

  constructor(private _http: HttpcallService) {}

  getDataCourses() {
    return this._coursesListSubject.getValue();
  }

  setDataCourses(data: Course[]) {
    this._coursesListSubject.next(data);
  }

  retrieveDataCourses() {
    if (!!this.getDataCourses()) {
      return this.courseListData$;
    }
    return this._http.retrieveMock('lista-corsi/mock/corsi.json').pipe(
      map((content) => content.courses),
      tap((data) => this.setDataCourses(data)),
      take(1),
      catchError((err) => [])
    );
  }

  retrieveRecentCourses() {
    return this.retrieveDataCourses().pipe(
      map((content) => content.filter((data: Course) => data.viewed)),
      take(1)
    );
  }

  retrieveCourseLessons(courseId: string) {
    return this.courseListData$.pipe(
      map(
        (content) =>
          content!.filter((data: any) => data.id === +courseId)[0].lessons
      ),
      switchMap((lessons: Lesson[]) =>
        iif(
          () => !!lessons,
          of(lessons),
          this._http.retrieveMock('lista-corsi/mock/lezioni.json').pipe(
            map((content) =>
              content.lessons.filter(
                (data: Lesson) => data.courseId === +courseId
              )
            ),
            tap((data) => {
              let currentValueHolder = this.getDataCourses();
              currentValueHolder!
                .filter((content) => content.id === +courseId)
                .map((content) => {
                  content.lessons = data;
                  content.viewed = true;
                });
              this.setDataCourses(currentValueHolder!);
            }),
            take(1),
            catchError((err) => [])
          )
        )
      )
    );
  }

  timerToMs(timer: string) {
    const timerArray = timer.split(':');
    return (
      (+timerArray[0] * 3600 + +timerArray[1] * 60 + +timerArray[2]) * 1000
    );
  }

  registerLessonsTime(lessonArray: any) {
    lessonArray.forEach((element: any) => {
      element.duration = this.timerToMs(element.duration);
    });
    return lessonArray;
  }

  courseDurationCalc(lessonArray: any) {
    let totalTime = 0;
    lessonArray.forEach((element: any) => {
      totalTime = totalTime + this.timerToMs(element.duration);
    });
    return totalTime;
  }

  addCourse(newCourseForm: FormGroup) {
    const newCourse = {
      id: this.getDataCourses()!.length + 1,
      title: newCourseForm.value.title,
      description: newCourseForm.value.description,
      difficulty: newCourseForm.value.difficulty,
      duration: this.courseDurationCalc(newCourseForm.value.lessons),
      price: newCourseForm.value.price,
      viewed: false,
      lessons: this.registerLessonsTime(newCourseForm.value.lessons),
    };

    let currentValueHolder = this.getDataCourses();
    currentValueHolder?.push(newCourse);
    this.setDataCourses(currentValueHolder!);
  }
}
