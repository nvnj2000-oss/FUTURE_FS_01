import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  isCurrent?: boolean;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      id: 1,
      title: 'Social Media Marketing Intern',
      company: 'Flavio Mendes (Virtual)',
      period: 'Jul 2025 - Present',
      description: 'Contributing to social media strategy and analytics, working with creative teams to enhance online presence and engagement.',
      responsibilities: [
        'Managed YouTube analytics and performance metrics',
        'Collaborated with designers and video editors on content creation',
        'Improved engagement through strategic content planning',
        'Analyzed audience insights and user behavior patterns',
        'Assisted in creating marketing campaigns and promotional materials'
      ],
      isCurrent: true
    }
  ];
}
