import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
