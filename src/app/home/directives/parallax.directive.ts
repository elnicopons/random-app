import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxDirective implements AfterViewInit {
  private easing = 0.05;
  private maxDistance = 50;
  private element!: HTMLElement;

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private animationFrameId: number | null = null;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const bounds = this.element.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    this.targetX = ((x - centerX) / centerX) * -this.maxDistance;
    this.targetY = ((y - centerY) / centerY) * -this.maxDistance;

    this.startAnimation();
  }

  private startAnimation() {
    if (this.animationFrameId === null) {
      this.animate();
    }
  }

  private animate = () => {
    const diffX = this.targetX - this.currentX;
    const diffY = this.targetY - this.currentY;

    this.currentX += diffX * this.easing;
    this.currentY += diffY * this.easing;

    this.element.style.setProperty('--parallaxX', `${this.currentX}px`);
    this.element.style.setProperty('--parallaxY', `${this.currentY}px`);
    console.log(getComputedStyle(this.element).getPropertyValue('--parallaxX'));

    const closeEnough = Math.abs(diffX) < 0.1 && Math.abs(diffY) < 0.1;

    if (!closeEnough) {
      this.animationFrameId = requestAnimationFrame(this.animate);
    } else {
      this.currentX = this.targetX;
      this.currentY = this.targetY;
      this.element.style.setProperty('--parallaxX', `${this.currentX}px`);
      this.element.style.setProperty('--parallaxY', `${this.currentY}px`);
      this.animationFrameId = null;
    }
  };
}
