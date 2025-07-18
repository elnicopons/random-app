import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ReviewComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ReviewComponent],
})
export class ReviewModule {}
