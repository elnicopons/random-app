import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  @Input() value = 1;
  @Input() enableAnimation = true;
  levels: any[];
  icon = faStar;

  ngOnInit(): void {
    this.levels = Array(this.value);
  }
}
