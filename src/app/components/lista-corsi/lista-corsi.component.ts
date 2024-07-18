import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  debounceTime,
  filter,
  map,
  shareReplay,
  tap,
} from 'rxjs';
import { CoursesService } from 'src/app/Shared/services/courses.service';
import { Course, Difficulty } from 'src/app/models/course.model';
import { AggiungiCorsoDialogComponent } from './dialog/aggiungi-corso-dialog/aggiungi-corso-dialog.component';

@Component({
  selector: 'app-lista-corsi',
  templateUrl: './lista-corsi.component.html',
  styleUrls: ['./lista-corsi.component.scss'],
})
export class ListaCorsiComponent implements OnInit {
  constructor(
    private _managerCourses: CoursesService,
    public dialog: MatDialog
  ) {}

  courseList$: Observable<Course[] | null> = new Observable<Course[]>();
  displayMessage = 'Non sono stati trovati corsi';
  searchQuery$ = new BehaviorSubject<string>('');

  ngOnInit(): void {
    this.courseList$ = combineLatest([
      this._managerCourses.courseListData$,
      this.searchQuery$.pipe(debounceTime(300)),
    ]).pipe(
      tap((data) => console.log(data)),
      map((data: any) =>
        data[0].filter((element: Course) => element.title.includes(data[1]))
      )
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(AggiungiCorsoDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  onSearchUpdate(searchQuery: string) {
    this.searchQuery$.next(searchQuery);
  }
}
