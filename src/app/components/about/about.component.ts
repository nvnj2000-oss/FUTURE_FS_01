import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  highlights = [
    { icon: '📍', text: 'Based in Bangalore, India' },
    { icon: '🎓', text: 'CHRIST University, Yeshwanthpur Campus' },
    { icon: '📚', text: 'BCA (2025–2029)' },
    { icon: '💡', text: 'Passionate about Web Development & AI' }
  ];
}
