import { Lesson } from './lesson.model';

export enum Difficulty {
  bassa,
  media,
  alta,
}

export interface Course {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  duration: number;
  price: number;
  viewed: boolean;
  lessons: Lesson[];
}
