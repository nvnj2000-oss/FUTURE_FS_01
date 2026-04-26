import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { icon: '🐙', label: 'GitHub', url: 'https://github.com', title: 'GitHub' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com', title: 'LinkedIn' },
    { icon: '✉️', label: 'Email', url: 'mailto:nvnj2000@gmail.com', title: 'Email' },
    { icon: '🔗', label: 'Portfolio', url: 'https://dulcet-cassata-d76c62.netlify.app', title: 'Portfolio' }
  ];

  scrollToTop(): void {
    if (typeof window === 'undefined') return;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
