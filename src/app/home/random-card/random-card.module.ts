import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomCardComponent } from './random-card.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RandomCardComponent],
  imports: [CommonModule, ButtonModule, FontAwesomeModule],
  exports: [RandomCardComponent],
})
export class RandomCardModule {}
