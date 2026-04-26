import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  category: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Student Login Portal',
      description: 'Secure authentication system with session management, admin dashboard, and user role-based access control.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect fill="%2300d4ff" width="300" height="200" opacity="0.1"/%3E%3Crect x="50" y="40" width="200" height="120" rx="8" fill="%2300d4ff" opacity="0.2" stroke="%2300d4ff" stroke-width="2"/%3E%3Ctext x="150" y="110" text-anchor="middle" fill="%2300d4ff" font-size="24" font-weight="bold"%3ELogin Portal%3C/text%3E%3C/svg%3E',
      tags: ['PHP', 'MySQL', 'phpMyAdmin', 'Security'],
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'Backend'
    },
    {
      id: 2,
      title: 'Sign Language Recognition System',
      description: 'AI-powered system for real-time sign language detection using computer vision and deep learning models.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect fill="%236c5ce7" width="300" height="200" opacity="0.1"/%3E%3Crect x="50" y="40" width="200" height="120" rx="8" fill="%236c5ce7" opacity="0.2" stroke="%236c5ce7" stroke-width="2"/%3E%3Ctext x="150" y="110" text-anchor="middle" fill="%236c5ce7" font-size="20" font-weight="bold"%3ESign Language AI%3C/text%3E%3C/svg%3E',
      tags: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
      github: 'https://github.com',
      category: 'AI/ML'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio showcasing projects with smooth animations, glassmorphism design, and SEO optimization.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect fill="%2300f0ff" width="300" height="200" opacity="0.1"/%3E%3Crect x="50" y="40" width="200" height="120" rx="8" fill="%2300f0ff" opacity="0.2" stroke="%2300f0ff" stroke-width="2"/%3E%3Ctext x="150" y="110" text-anchor="middle" fill="%2300f0ff" font-size="24" font-weight="bold"%3EPortfolio%3C/text%3E%3C/svg%3E',
      tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive'],
      github: 'https://github.com',
      live: 'https://dulcet-cassata-d76c62.netlify.app',
      category: 'Frontend'
    },
    {
      id: 4,
      title: '3D Black Hole Animation',
      description: 'Interactive 3D simulation of a black hole with realistic physics calculations and particle effects visualization.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Cdefs%3E%3CradialGradient id="grad"/%3E%3C/defs%3E%3Crect fill="%23000" width="300" height="200"/%3E%3Ccircle cx="150" cy="100" r="60" fill="%2300d4ff" opacity="0.3"/%3E%3Ccircle cx="150" cy="100" r="40" fill="%23000"/%3E%3Ctext x="150" y="110" text-anchor="middle" fill="%2300d4ff" font-size="18" font-weight="bold"%3E3D Simulation%3C/text%3E%3C/svg%3E',
      tags: ['Python', 'Pygame', 'Physics', 'NumPy'],
      github: 'https://github.com',
      category: 'Python'
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product management, shopping cart, and secure payment integration.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect fill="%23a29bfe" width="300" height="200" opacity="0.1"/%3E%3Crect x="50" y="40" width="200" height="120" rx="8" fill="%23a29bfe" opacity="0.2" stroke="%23a29bfe" stroke-width="2"/%3E%3Ctext x="150" y="110" text-anchor="middle" fill="%23a29bfe" font-size="20" font-weight="bold"%3EE-Commerce%3C/text%3E%3C/svg%3E',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'Real-time weather tracking application with location-based forecasts, historical data, and beautiful visualizations.',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect fill="%2300d4ff" width="300" height="200" opacity="0.1"/%3E%3Ccircle cx="150" cy="100" r="40" fill="%23ffeb3b" opacity="0.6"/%3E%3Cpath d="M 120 130 Q 150 140 180 130" stroke="%2300d4ff" stroke-width="2" fill="none"/%3E%3Ctext x="150" y="50" text-anchor="middle" fill="%2300d4ff" font-size="16" font-weight="bold"%3EWeather App%3C/text%3E%3C/svg%3E',
      tags: ['Angular', 'API Integration', 'Charts.js', 'Responsive'],
      github: 'https://github.com',
      live: 'https://example.com',
      category: 'Frontend'
    }
  ];

  categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'AI/ML', 'Python'];
  selectedCategory = 'All';

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
