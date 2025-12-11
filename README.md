# Personal Portfolio Website - Grafenberg Langpen

> Modern, professional portfolio website showcasing AI/ML projects, full-stack development skills, and technical expertise.

🌐 **Live Website**: [grafenx07.github.io](https://grafenx07.github.io)

A modern, professional portfolio website inspired by betonavarro.com, showcasing your projects, skills, and experience as a Full Stack Developer & AI/ML Enthusiast.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Custom cursor, smooth scrolling, and animated sections
- **Project Showcase**: Detailed project pages with descriptions and tech stacks
- **Performance Optimized**: Fast loading with efficient code structure

## 📁 File Structure

```
MyWebsite/
│
├── index.html          # Main homepage
├── work.html          # Detailed projects page
├── styles.css         # Main stylesheet
├── work.css           # Work page specific styles
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## 🎨 Sections

### Homepage (index.html)

1. **Hero Section** - Introduction with animated name
2. **About Section** - Professional summary and skills marquee
3. **Featured Projects** - Grid of your main projects
4. **Education & Experience** - Timeline of your academic journey
5. **Skills Overview** - Technical expertise with progress bars
6. **Contact Section** - Email and social links

### Work Page (work.html)

- Detailed project descriptions
- Key features for each project
- Technology stacks with icons
- Links to GitHub repositories

## 🛠️ Customization Guide

### 1. Add Your Profile Photo

Replace the placeholder in the hero section:

```html
<!-- In index.html, find this section: -->
<div class="image-placeholder">
    <i class="fas fa-user-circle"></i>
</div>

<!-- Replace with: -->
<img src="your-photo.jpg" alt="Grafenberg Langpen" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
```

### 2. Update Project Images

Add images to your project cards by replacing the icon placeholders:

```html
<!-- Replace this: -->
<div class="project-overlay">
    <i class="fas fa-face-smile"></i>
</div>

<!-- With: -->
<img src="project-image.jpg" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
```

### 3. Modify Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #3CDEF7;    /* Change to your preferred color */
    --accent: #3CDEF7;           /* Accent color */
    --bg-dark: #0a0a0a;          /* Background color */
}
```

### 4. Update Contact Information

In `index.html`, update:
- Email address
- GitHub link
- LinkedIn link

### 5. Add More Projects

Copy a project card and modify the content:

```html
<div class="project-card" data-aos="fade-up">
    <div class="project-image">
        <div class="project-overlay">
            <i class="fas fa-your-icon"></i>
        </div>
    </div>
    <div class="project-info">
        <h3>Your Project Name</h3>
        <p>Project description</p>
        <div class="tech-stack">
            <span>Tech 1</span>
            <span>Tech 2</span>
        </div>
    </div>
</div>
```

## 🌐 Deployment Options

### Option 1: GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify

1. Drag and drop your website folder to [Netlify](https://app.netlify.com/drop)
2. Your site will be instantly deployed

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Use WebP Format**: Convert images to WebP for better performance
3. **Lazy Loading**: Images load only when needed
4. **Minify CSS/JS**: Use tools like UglifyJS or CSSNano before deployment

## 📝 Adding a Blog Section (Optional)

To add a blog section:

1. Create `blog.html`
2. Add link in navigation:
```html
<li><a href="blog.html">BLOG</a></li>
```
3. Create blog post template with similar styling

## 🔧 Technical Stack

- **HTML5** - Structure
- **CSS3** - Styling with animations
- **JavaScript (ES6+)** - Interactivity
- **Font Awesome** - Icons
- **AOS Library** - Scroll animations
- **Google Fonts** - Typography (Inter)

## 📞 Support

If you need help customizing the website:
- Email: grafenaveiro@gmail.com
- GitHub: [@grafenx07](https://github.com/grafenx07)

## 📄 License

This project is open source and available for personal use.

## 🙏 Credits

- Design inspired by [betonavarro.com](https://www.betonavarro.com/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ by Grafenberg Langpen
