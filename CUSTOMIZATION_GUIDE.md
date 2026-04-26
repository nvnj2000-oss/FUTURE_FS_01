# 🎯 Quick Start & Customization Guide

## 🚀 Getting Started

### Initial Setup
```bash
# 1. Navigate to project
cd task1-my-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
ng serve

# 4. Open browser
http://localhost:4200
```

---

## ✏️ Customizing for Your Profile

### 1. Update Personal Information

#### Update Hero Section
**File**: `src/app/components/hero/hero.component.ts`

Change the title rotation:
```typescript
titles = ['Your Job 1', 'Your Job 2', 'Your Job 3'];
```

**File**: `src/app/components/hero/hero.component.html`

Update name and intro:
```html
<h1 class="hero-name">Your Name</h1>
<!-- Update intro text -->
```

#### Update About Section
**File**: `src/app/components/about/about.component.ts`

Update highlights:
```typescript
highlights = [
  { icon: '📍', text: 'Your City, Country' },
  { icon: '🎓', text: 'Your University' },
  // ... etc
];
```

**File**: `src/app/components/about/about.component.html`

Update journey and description text.

---

### 2. Update Skills

**File**: `src/app/components/skills/skills.component.ts`

Edit the skills array:
```typescript
skills: Skill[] = [
  { name: 'Your Skill', level: 90, icon: '⚡', category: 'Category' },
  // Add/remove as needed
];

categories = ['All', 'Your Categories'];
```

**Change skill levels** (0-100):
- 90-100: Expert
- 75-89: Advanced
- 60-74: Intermediate
- < 60: Beginner

**Change icons** to any emoji:
🚀 🎨 🔧 💡 🎯 ⚙️ 🔐 📊 etc.

---

### 3. Update Projects

**File**: `src/app/components/projects/projects.component.ts`

Edit projects array:
```typescript
projects: Project[] = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    image: 'image-url or data:image/svg+xml...',
    tags: ['Tech1', 'Tech2'],
    github: 'https://github.com/yourrepo',
    live: 'https://project-link.com',
    category: 'Category'
  },
  // Add more projects
];
```

**To add project images**:
1. Place images in `public/images/`
2. Reference as: `/images/project.jpg`

**Or use SVG**:
Create SVG placeholders with unique colors.

---

### 4. Update Experience

**File**: `src/app/components/experience/experience.component.ts`

Edit experience array:
```typescript
experiences: Experience[] = [
  {
    id: 1,
    title: 'Your Position',
    company: 'Company Name',
    period: 'Mon Year - Mon Year',
    description: 'Job description',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      // ...
    ],
    isCurrent: true // if currently employed
  }
];
```

---

### 5. Update Achievements

**File**: `src/app/components/achievements/achievements.component.ts`

Edit achievements array:
```typescript
achievements = [
  {
    title: 'Award/Achievement Name',
    organization: 'Organization Name',
    description: 'What you achieved',
    icon: '🏆', // Any emoji
    year: '2024'
  }
];
```

---

### 6. Update Contact Information

**File**: `src/app/components/contact/contact.component.ts`

Update contact info:
```typescript
contactInfo = [
  { icon: '📱', label: 'Phone', value: 'Your Number', link: 'tel:+...' },
  { icon: '📧', label: 'Email', value: 'your@email.com', link: 'mailto:...' },
  { icon: '🌐', label: 'Portfolio', value: 'your-domain.com', link: 'https://...' }
];
```

**File**: `src/app/components/footer/footer.component.ts`

Update social links:
```typescript
socialLinks = [
  { icon: '🐙', label: 'GitHub', url: 'https://github.com/your-username', title: 'GitHub' },
  { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', title: 'LinkedIn' },
  // ... etc
];
```

---

## 🎨 Customize Styling

### Change Color Theme

**File**: `src/styles.css`

Edit CSS variables in `:root`:
```css
:root {
  --accent-blue: #00d4ff;        /* Primary accent */
  --accent-purple: #6c5ce7;      /* Secondary accent */
  --primary-dark: #0a0e27;       /* Main background */
  --text-primary: #ffffff;       /* Text color */
  --text-secondary: #b0b9c3;     /* Muted text */
}
```

**Color suggestions**:
- Tech: Blue + Purple (current)
- Creative: Purple + Pink
- Professional: Blue + Gray
- Modern: Cyan + Magenta

### Change Fonts

**File**: `src/styles.css`

Edit the import:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR+FONT:wght@400;600;700&display=swap');
```

Then update font-family:
```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

**Popular fonts**: Inter, Poppins, Roboto, Raleway, Quicksand

---

### Change Background

**File**: `src/styles.css`

Edit body background:
```css
body {
  background: linear-gradient(135deg, color1 0%, color2 50%, color3 100%);
  background-attachment: fixed;
}
```

**Gradient ideas**:
- Horizontal: `90deg`
- Vertical: `180deg`
- Diagonal: `135deg` or `45deg`
- Radial: `radial-gradient(circle, ...)`

---

## 🎬 Customize Animations

### Change Animation Duration

**File**: `src/styles.css`

Find animation definitions:
```css
@keyframes fadeInUp {
  /* ... */
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;  /* Change 0.6s */
}
```

**Common durations**:
- 0.3s: Quick, snappy
- 0.6s: Standard, smooth
- 0.9s: Slower, elegant
- 1.2s: Very slow, dramatic

### Disable Animations

For a simpler look, remove animation classes from components or change in CSS:
```css
.fade-in-up {
  animation: none;
  opacity: 1;
  transform: none;
}
```

---

## 📱 Update Navbar Links

**File**: `src/app/components/navbar/navbar.component.ts`

Edit navigation items:
```typescript
navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Your Section', id: 'your-id' },
  // ...
];
```

Make sure section IDs match in HTML.

---

## 🖼️ Add Your Avatar

### Replace Hero Avatar

**File**: `src/app/components/hero/hero.component.html`

Replace the SVG avatar with your image:
```html
<div class="avatar-content">
  <img src="/images/your-avatar.png" alt="Your Name">
</div>
```

**Size**: Square image, 300x300px recommended

### Style Avatar

**File**: `src/app/components/hero/hero.component.css`

Adjust avatar styling:
```css
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
```

---

## 📝 Add a Resume

### Create Resume PDF

1. Save your resume as PDF
2. Place in `public/resume.pdf`
3. The download button will automatically work

**Note**: Update the download filename in navbar and hero components if needed.

---

## 🔗 Add More Sections

To add a new section:

1. **Create component**:
   ```bash
   ng generate component components/your-section
   ```

2. **Add to app.ts imports**:
   ```typescript
   import { YourSectionComponent } from './components/your-section/...';
   ```

3. **Add to imports array**:
   ```typescript
   imports: [
     // ... existing components
     YourSectionComponent
   ]
   ```

4. **Add to app.html**:
   ```html
   <app-your-section></app-your-section>
   ```

5. **Style with component CSS**

---

## 🔐 Form Backend Integration

### Current Form Setup
Currently, the contact form shows success/error messages but doesn't actually send emails.

### Add Email Service

**Option 1: EmailJS (Recommended)**
```bash
npm install @emailjs/browser
```

**File**: `src/app/components/contact/contact.component.ts`

```typescript
import emailjs from '@emailjs/browser';

constructor() {
  emailjs.init('YOUR_PUBLIC_KEY');
}

onSubmit(): void {
  emailjs.send('service_id', 'template_id', {
    from_name: this.formData.name,
    from_email: this.formData.email,
    message: this.formData.message
  })
  .then(() => this.submitSuccess.set(true))
  .catch(() => this.submitError.set('Failed to send'));
}
```

**Option 2: Firebase**
```bash
npm install firebase
```

Configure Firebase and use Cloud Functions.

---

## 📱 Mobile Testing

```bash
# Build and test
ng build
npx http-server dist/task1-my-portfolio
# Open on mobile: http://your-ip:8080
```

---

## 🧪 Common Customizations Checklist

- [ ] Update name and intro
- [ ] Change color theme
- [ ] Update skills list
- [ ] Add your projects
- [ ] Update experience
- [ ] Add achievements
- [ ] Update contact info
- [ ] Add avatar image
- [ ] Add resume PDF
- [ ] Update navbar links
- [ ] Change fonts
- [ ] Update social links
- [ ] Adjust animations (optional)
- [ ] Test on mobile
- [ ] Check all links work

---

## 🚀 Next Steps

1. ✅ Customize all content
2. ✅ Test locally: `ng serve`
3. ✅ Build: `ng build`
4. ✅ Deploy: Choose platform from DEPLOYMENT_GUIDE.md
5. ✅ Share with recruiters!

---

## 💡 Tips

**Pro Tips**:
- Keep descriptions concise but impressive
- Use action verbs: Built, Created, Designed, Optimized
- Add metrics: "Improved performance by 40%"
- Update regularly: Add new projects and skills
- Keep one single resume/CV linked
- Make sure all links are correct and work
- Test on multiple browsers
- Use high-quality project images/screenshots

**SEO Tips**:
- Update meta description in index.html
- Include relevant keywords
- Add alt text to images
- Use semantic HTML (already done)
- Ensure fast loading (already optimized)

---

## 🆘 Troubleshooting

### Component not showing
- Verify import in app.ts
- Check component selector in HTML
- Verify template path is correct

### Styles not applying
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check CSS specificity
- Verify class names match

### Links not working
- Check href values
- Verify IDs match navigation
- Test in development first

### Images not showing
- Verify path is correct
- Check file exists in public folder
- Try absolute path: `/images/file.jpg`

---

## 📚 Resources

- [Angular Documentation](https://angular.dev)
- [CSS Tricks](https://css-tricks.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Google Fonts](https://fonts.google.com)
- [Emoji Reference](https://emojipedia.org)

---

**Happy customizing! Your portfolio is now uniquely yours! 🎉**
