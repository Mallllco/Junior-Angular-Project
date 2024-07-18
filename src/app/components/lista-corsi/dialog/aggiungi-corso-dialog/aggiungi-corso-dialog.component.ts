import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CoursesService } from 'src/app/Shared/services/courses.service';
@Component({
  selector: 'app-aggiungi-corso-dialog',
  templateUrl: './aggiungi-corso-dialog.component.html',
  styleUrls: ['./aggiungi-corso-dialog.component.scss'],
})
export class AggiungiCorsoDialogComponent implements OnInit {
  addCourseForm!: FormGroup;
  lessonTemplate = {
    title: ['', Validators.required],
    description: ['', Validators.required],
    duration: [
      '00:00:00',
      [
        Validators.required,
        Validators.pattern('[0-9]{2}:[0-5]{1}[0-9]{1}:[0-5]{1}[0-9]{1}'),
      ],
    ],
  };

  constructor(
    private _managerCourses: CoursesService,
    private _formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.addCourseForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      difficulty: new FormControl('', Validators.required),
      // duration: new FormControl('00:00:00', [
      //   Validators.required,
      //   Validators.pattern('[0-9]{2}:[0-9]{2}:[0-9]{2}'),
      // ]),
      price: new FormControl('', Validators.required),
      lessons: new FormArray([]),
    });
    this.addNewLesson();
  }

  newLesson(): FormGroup {
    return this._formBuilder.group(this.lessonTemplate);
  }

  get Lessons() {
    return this.addCourseForm.get('lessons') as FormArray;
  }

  addNewLesson() {
    this.Lessons.push(this.newLesson());
  }

  deleteLesson(indexElement: number) {
    this.Lessons.removeAt(indexElement);
  }

  changeDifficulty(selected: any) {
    this.addCourseForm.get('difficulty')?.setValue(selected.target.value, {
      onlySelf: true,
    });
  }

  onSubmit(form: FormGroup) {
    this._managerCourses.addCourse(form);
  }
}
