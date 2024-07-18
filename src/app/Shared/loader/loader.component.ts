import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [MatProgressSpinnerModule, NgIf, AsyncPipe],
  standalone: true,
})
export class LoaderComponent {
  constructor(public loader: LoaderService) {}
}
