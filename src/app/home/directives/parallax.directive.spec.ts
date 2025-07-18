import { ElementRef } from '@angular/core';
import { ParallaxDirective } from './parallax.directive';

describe('ParallaxDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef('');
    const directive = new ParallaxDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
