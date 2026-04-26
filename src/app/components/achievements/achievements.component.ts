import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements = [
    {
      title: 'HackNova - Game Development Hackathon',
      organization: 'CS Department, CHRIST University',
      description: 'Participated in an intensive game development hackathon, collaborating with a team to create an innovative gaming solution.',
      icon: 'HN',
      year: '2025'
    }
  ];
}
