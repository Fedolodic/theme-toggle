# Theme Toggle 

> A modern, animated theme switcher built with Angular 19 featuring smooth transitions and reactive state management.

##  Quick Summary

This project demonstrates an elegant implementation of a dark/light theme switcher in Angular, featuring:
- Smooth theme transitions with CSS variables
- Reactive state management using RxJS
- Standalone components architecture
- Modern UI with animated transitions
- Responsive design principles

##  Features

###  Dynamic Theme Switching
- Seamless transitions between light and dark modes
- CSS variable-based theming system
- Persistent theme state
- Reactive UI updates using RxJS observables

###  Technical Implementation
- Built using Angular 19's standalone components
- Implements modern Angular best practices
- Utilizes RxJS BehaviorSubject for state management
- CSS custom properties for dynamic styling

###  Experimental UI Features
- Morphing button animations during theme transitions
- Smooth color palette transitions
- Dynamic shadow adjustments
- Micro-interactions and hover effects
- Adaptive contrast ratios

##  Getting Started

1. **Prerequisites**
   - Node.js (LTS version recommended)
   - Angular CLI v19.0.0 or higher

2. **Installation**
   ```bash
   # Clone the repository
   git clone [your-repo-url]

   # Install dependencies
   npm install
   ```

3. **Development Server**
   ```bash
   # Start the server
   npm start

   # Or use a specific port
   ng serve --port 4201
   ```
   Navigate to `http://localhost:4201/` in your browser.

##  Usage

The theme toggle functionality is implemented through a service-based architecture:

```typescript
// Theme switching is as simple as:
themeService.toggleTheme();
```

##  Customization

The theme system is built using CSS custom properties, making it easy to customize:

```css
:root {
  --background-color: #ffffff;
  --text-color: #333333;
  /* Add your custom variables here */
}

.dark-theme {
  --background-color: #1a1a1a;
  --text-color: #ffffff;
}
```

##  Development Tools

- `ng serve` - Start development server
- `ng build` - Build the project
- `ng test` - Run unit tests
- `ng e2e` - Run end-to-end tests

##  Future Enhancements

- [ ] Add system theme detection
- [ ] Implement theme transition animations
- [ ] Add custom theme creation
- [ ] Support for multiple theme variants
- [ ] Add theme preview functionality

##  Learn More

- [Angular Documentation](https://angular.io/docs)
- [RxJS Documentation](https://rxjs.dev/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

##  License

This project is licensed under the MIT License - see the LICENSE file for details.
