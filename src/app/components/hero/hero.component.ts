import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  titles = ['BCA Student', 'Web Developer', 'Full Stack Learner'];
  currentTitle = signal(0);
  displayText = signal('');
  isTyping = signal(true);

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    this.typeTitle();
  }

  typeTitle(): void {
    const titles = this.titles;
    const current = this.currentTitle();
    const fullText = titles[current];
    let index = 0;

    const type = () => {
      if (index < fullText.length) {
        this.displayText.set(fullText.slice(0, index + 1));
        index++;
        setTimeout(type, 50);
      } else {
        setTimeout(() => {
          this.deleteTitle();
        }, 2000);
      }
    };

    // Clear text before typing next title
    setTimeout(() => {
      type();
    }, 300);
  }

  deleteTitle(): void {
    const current = this.titles[this.currentTitle()];
    let index = current.length;

    const deleteChar = () => {
      if (index > 0) {
        this.displayText.set(current.slice(0, index - 1));
        index--;
        setTimeout(deleteChar, 30);
      } else {
        // Move to next title
        const nextIndex = (this.currentTitle() + 1) % this.titles.length;
        this.currentTitle.set(nextIndex);
        this.typeTitle();
      }
    };

    deleteChar();
  }

  scrollToProjects(): void {
    this.scrollAnimation.scrollToSection('projects');
  }

  downloadResume(): void {
    if (typeof document === 'undefined') return;

    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'Naveen_J_Resume.pdf';
    link.click();
  }

  contactMe(): void {
    this.scrollAnimation.scrollToSection('contact');
  }
}
