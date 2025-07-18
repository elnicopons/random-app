import { Component, Input } from '@angular/core';
import { ListItem } from './list-item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() items: ListItem[] = [];
  @Input() type: 'review' | 'percent' = 'percent';
  @Input() colored = false;
}
