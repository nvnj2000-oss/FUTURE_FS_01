import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  scrollPosition = signal(0);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.scrollPosition.set(window.scrollY);
      });
    }
  }

  isElementInViewport(element: Element): boolean {
    if (!element || typeof window === 'undefined') return false;

    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }

  scrollToSection(sectionId: string): void {
    if (typeof document === 'undefined') return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
