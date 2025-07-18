import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ListItem } from 'src/app/components/list/list-item.model';

@Component({
  selector: 'app-random-card',
  templateUrl: './random-card.component.html',
  styleUrls: ['./random-card.component.scss'],
})
export class RandomCardComponent implements OnChanges {
  @Input() items: ListItem[];
  @Input() text: string;
  @Input() randomize: boolean;

  selectedItem: ListItem;
  spinnerIcon = faSpinner;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['randomize']) {
      this.setSelectedItem();
    }
  }

  getRandomItem(list: ListItem[]) {
    return list[Math.floor(Math.random() * list.length)];
  }

  onClick() {
    this.setSelectedItem();
  }

  private setSelectedItem() {
    this.selectedItem = null;
    setTimeout(() => {
      this.selectedItem = this.getRandomItem(this.items);
    }, 500);
  }
}
