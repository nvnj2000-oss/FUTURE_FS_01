import { Component, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal('');

  contactInfo = [
    { icon: '📱', label: 'Phone', value: '+91 9188609722', link: 'tel:+919188609722' },
    { icon: '📧', label: 'Email', value: 'nvnj2000@gmail.com', link: 'mailto:nvnj2000@gmail.com' },
    { icon: '🌐', label: 'Portfolio', value: 'dulcet-cassata-d76c62.netlify.app', link: 'https://dulcet-cassata-d76c62.netlify.app' }
  ];

  onSubmit(form: any): void {
    if (form.invalid) {
      this.submitError.set('Please fill in all fields correctly');
      return;
    }

    this.isSubmitting.set(true);
    
    // Simulate email sending
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      this.formData = { name: '', email: '', message: '' };
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess.set(false);
      }, 5000);
    }, 1500);
  }
}
