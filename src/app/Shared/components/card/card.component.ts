import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface CardDTO {
  tite: string;
  description: string;
  [key: string]: any;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [MatCardModule, NgTemplateOutlet],
})
export class CardComponent {
  @Input() list: CardDTO | any;

  ngOnInit(): void {}
}
