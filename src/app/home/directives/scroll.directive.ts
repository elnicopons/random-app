import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]',
})
export class ScrollDirective {
  private sections: HTMLElement[] = [];
  private currentIndex = 0;
  private isScrolling = false;
  private touchStartY = 0;
  private readonly deltaThreshold = 30;
  private readonly scrollCooldown = 500;
  private readonly swipeThreshold = 50;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.sections = Array.from(
      this.el.nativeElement.querySelectorAll('.fullscreen')
    ) as HTMLElement[];
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if (this.isScrolling) {
      event.preventDefault();
      return;
    }

    if (Math.abs(event.deltaY) < this.deltaThreshold) return;

    event.preventDefault();

    const direction = event.deltaY > 0 ? 'down' : 'up';

    this.scrollToSection(direction);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const touchEndY = event.changedTouches[0].clientY;
    const deltaY = touchEndY - this.touchStartY;

    if (this.isScrolling) return;

    if (Math.abs(deltaY) < this.swipeThreshold) return;

    const direction = deltaY < 0 ? 'down' : 'up';

    this.scrollToSection(direction);
  }

  private scrollToSection(direction: 'up' | 'down') {
    if (direction === 'down' && this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
    } else if (direction === 'up' && this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      return;
    }

    this.isScrolling = true;
    this.sections[this.currentIndex].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      this.isScrolling = false;
    }, this.scrollCooldown);
  }
}
