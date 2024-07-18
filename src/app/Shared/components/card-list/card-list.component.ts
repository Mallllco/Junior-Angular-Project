import {
  Component,
  ContentChild,
  Input,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
import { NgTemplateOutlet, NgIf } from '@angular/common';
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  standalone: true,
  imports: [CardComponent, NgFor, NgTemplateOutlet, NgIf],
})
export class CardListComponent {
  @Input() lists!: Array<any> | null;
  @Input() message = '';
  @ContentChild(TemplateRef) cardRef!: TemplateRef<any>;
}
