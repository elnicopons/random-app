import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Line } from './line.model';
import { Size } from '../../../../src/app/models/size.enum';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
})
export class LineComponent implements OnInit, AfterViewInit {
  @Input() lines: Line[];
  @Input() reverse = false;
  @Input() enableAnimation = true;
  lineElements: {
    width: string;
    height: string;
    widthClass: string;
    heightClass: string;
  }[];

  ngOnInit(): void {
    this.lineElements = this.lines.map((line) => {
      return {
        width: line.width,
        height: line.height,
        widthClass: this.enableAnimation ? '' : `line__item-width-${line.width}`,
        heightClass: `line__item-height-${line.height}`,
      };
    });
  }

  ngAfterViewInit(): void {
    if (!this.enableAnimation) {
      return;
    }

    setTimeout(() => {
      this.lineElements.forEach((line) => {
        line.widthClass = `line__item-width-${line.width}`;
      });
    }, 1);
  }
}
