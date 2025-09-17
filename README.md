# Erled Agency - Maritime Transport Solutions

A modern, responsive website for Erled Agency, a professional maritime transport company specializing in shipping, container logistics, and electronic scale measurements.

## Features

### 🚢 **Professional Design**
- Maritime-themed color scheme with ocean blues and nautical elements
- Modern, clean layout with smooth animations
- Professional typography using Inter font family

### 📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all device sizes (desktop, tablet, mobile)
- Touch-friendly navigation and interactions

### ⚡ **Interactive Elements**
- Smooth scrolling navigation
- Animated counters for statistics
- Contact form with validation
- Mobile hamburger menu
- Scroll-triggered animations

### 🎯 **Key Sections**
1. **Hero Section** - Compelling introduction with company statistics
2. **Services** - Three main service offerings with detailed features
3. **About** - Company information and key differentiators
4. **Contact** - Contact form and business information
5. **Footer** - Additional links and social media

## Services Highlighted

### 🚢 Ship Transport
- Cargo vessel operations
- Route optimization
- Port coordination
- Safety compliance

### 📦 Container Logistics
- Container loading/unloading
- Warehouse storage
- Cargo tracking
- Documentation handling

### ⚖️ Electronic Scale Measurements
- Digital weighing systems
- Certified measurements
- Real-time data logging
- Compliance reporting

## File Structure

```
/workspace/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript interactions and functionality
└── README.md           # This documentation file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Local server** (recommended): Use a local server for best performance
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```
3. **Access**: Navigate to `http://localhost:8000` in your browser

## Customization

### Colors
The website uses CSS custom properties (variables) for easy color customization:
- `--primary-color`: Main brand color (dark blue)
- `--secondary-color`: Accent color (light blue)
- `--accent-color`: Highlight color (amber)

### Content
- Update company information in the HTML file
- Replace placeholder contact details with actual information
- Add real company images by replacing the image placeholder sections

### Contact Form
The contact form currently shows a success message for demonstration. To make it functional:
1. Set up a backend service (PHP, Node.js, etc.)
2. Update the form submission handler in `script.js`
3. Configure email sending functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized CSS with efficient selectors
- Debounced scroll events for smooth performance
- Lazy loading ready (can be implemented for images)
- Minimal JavaScript for fast loading
- CSS Grid and Flexbox for efficient layouts

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators for interactive elements
- ARIA labels where needed
- High contrast colors for readability

## SEO Ready

- Proper meta tags and descriptions
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design
- Structured content hierarchy

---

**Built with modern web standards and best practices for Erled Agency's maritime transport business.**