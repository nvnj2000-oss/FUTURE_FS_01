import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'HTML5', level: 95, icon: '🏗️', category: 'Frontend' },
    { name: 'CSS3', level: 92, icon: '🎨', category: 'Frontend' },
    { name: 'JavaScript', level: 90, icon: '⚡', category: 'Frontend' },
    { name: 'TypeScript', level: 85, icon: '📘', category: 'Frontend' },
    { name: 'React', level: 88, icon: '⚛️', category: 'Frontend' },
    { name: 'Angular', level: 90, icon: '🔴', category: 'Frontend' },
    { name: 'Node.js', level: 85, icon: '🟢', category: 'Backend' },
    { name: 'Python', level: 88, icon: '🐍', category: 'Backend' },
    { name: 'MySQL', level: 87, icon: '🗄️', category: 'Database' },
    { name: 'MongoDB', level: 82, icon: '🍃', category: 'Database' },
    { name: 'Firebase', level: 80, icon: '🔥', category: 'Backend' },
    { name: 'Git/GitHub', level: 90, icon: '🐙', category: 'Tools' }
  ];

  categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];
  selectedCategory = 'All';

  get filteredSkills(): Skill[] {
    if (this.selectedCategory === 'All') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
