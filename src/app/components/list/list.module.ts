import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BarModule } from '../bar/bar.module';
import { HoverModule } from '../hover/hover.module';
import { ReviewModule } from '../review/review.module';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BarModule,
    HoverModule,
    ReviewModule,
  ],
  exports: [ListComponent],
})
export class ListModule {}
