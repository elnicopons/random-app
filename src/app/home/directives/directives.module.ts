import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDirective } from './scroll.directive';
import { ParallaxDirective } from './parallax.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ScrollDirective, ParallaxDirective],
  exports: [ScrollDirective, ParallaxDirective],
})
export class DirectivesModule {}
