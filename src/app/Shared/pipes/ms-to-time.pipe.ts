import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToTime',
  standalone: true,
})
export class MsToTimePipe implements PipeTransform {
  transform(value: number): string {

    let seconds = Math.floor(value / 1000);
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(
      minutes
    )}:${this.padTo2Digits(seconds)}`;
  }
  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
}
