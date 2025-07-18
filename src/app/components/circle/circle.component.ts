import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent implements OnInit {
  @Input() size: 'S' | 'M' | 'L' = 'M';
  @Input() border = true;
  @Input() shadow = true;

  classes: string[] = [];

  ngOnInit(): void {
    this.classes.push(this.size);
    this.border && this.classes.push('circle-border');
    this.shadow && this.classes.push('circle-shadow');
  }
}
