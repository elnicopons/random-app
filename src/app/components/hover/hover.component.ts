import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-hover',
  templateUrl: './hover.component.html',
  styleUrls: ['./hover.component.scss'],
})
export class HoverComponent implements AfterViewInit {
  @ViewChild('hoverCard', { static: true }) hoverCard!: ElementRef;
  private maxRotation = 30;
  private easing = 0.1; // Cuanto menor, más lento el easing

  private cardEl!: HTMLElement;

  private targetRotateX = 0;
  private targetRotateY = 0;
  private currentRotateX = 0;
  private currentRotateY = 0;

  private animationFrameId: number | null = null;

  ngAfterViewInit(): void {
    this.cardEl = this.hoverCard.nativeElement;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const bounds = this.cardEl.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    this.targetRotateX = ((y - centerY) / centerY) * -this.maxRotation;
    this.targetRotateY = ((x - centerX) / centerX) * this.maxRotation;

    this.startAnimation();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.targetRotateX = 0;
    this.targetRotateY = 0;

    this.startAnimation();
  }

  private startAnimation() {
    if (this.animationFrameId === null) {
      this.animateRotation();
    }
  }

  private animateRotation = () => {
    const diffX = this.targetRotateX - this.currentRotateX;
    const diffY = this.targetRotateY - this.currentRotateY;

    // Lerp hacia el destino
    this.currentRotateX += diffX * this.easing;
    this.currentRotateY += diffY * this.easing;

    this.cardEl.style.transform = `rotateX(${this.currentRotateX}deg) rotateY(${this.currentRotateY}deg)`;

    const closeEnough = Math.abs(diffX) < 0.1 && Math.abs(diffY) < 0.1;

    if (!closeEnough) {
      this.animationFrameId = requestAnimationFrame(this.animateRotation);
    } else {
      // Finaliza suavemente
      this.currentRotateX = this.targetRotateX;
      this.currentRotateY = this.targetRotateY;
      this.cardEl.style.transform = `rotateX(${this.currentRotateX}deg) rotateY(${this.currentRotateY}deg)`;
      this.animationFrameId = null;
    }
  };
}
