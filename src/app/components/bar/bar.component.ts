import { Component, Input } from '@angular/core';
import { PRIMARY_COLOR } from '../../constants/constants';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  @Input() percentage = 0;
  @Input() colored = false;
  @Input() enableAnimation = true;

  getColor(percent: number): string {
    if (!this.colored) {
      return PRIMARY_COLOR;
    }

    percent = Math.max(0, Math.min(100, percent));

    const red = [255, 0, 0]; // 0%
    const yellow = [255, 255, 0]; // 50%
    const green = [0, 128, 0]; // 100%

    let start: number[];
    let end: number[];
    let t: number;

    if (percent <= 50) {
      // De rojo a amarillo
      start = red;
      end = yellow;
      t = percent / 50;
    } else {
      // De amarillo a verde
      start = yellow;
      end = green;
      t = (percent - 50) / 50;
    }

    const r = Math.round(start[0] + (end[0] - start[0]) * t);
    const g = Math.round(start[1] + (end[1] - start[1]) * t);
    const b = Math.round(start[2] + (end[2] - start[2]) * t);

    return `rgb(${r}, ${g}, ${b})`;
  }
}
