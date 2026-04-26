import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isMenuOpen = signal(false);
  scrolled = signal(false);

  navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' }
  ];

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngOnInit(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('scroll', () => {
      this.scrolled.set(window.scrollY > 50);
    });
  }

  toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  navigateTo(sectionId: string): void {
    this.scrollAnimation.scrollToSection(sectionId);
    this.isMenuOpen.set(false);
  }

  downloadResume(): void {
    if (typeof document === 'undefined') return;

    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'Naveen_J_Resume.pdf';
    link.click();
  }
}
