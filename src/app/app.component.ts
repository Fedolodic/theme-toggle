import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Theme Toggle Demo</h1>
      <button class="btn theme-toggle" (click)="toggleTheme()">
        {{ (themeService.isDarkTheme$ | async) ? '☀️ Light Mode' : '🌙 Dark Mode' }}
      </button>
      <div class="content">
        <p>This is a demonstration of theme toggling in Angular.</p>
        <p>The theme transition is smooth and applies to the entire application.</p>
      </div>
    </div>
  `,
  styles: [`
    .container {
      padding: 2rem;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .content {
      margin-top: 2rem;
      padding: 2rem;
      border-radius: 8px;
      background-color: var(--background-color);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h1 {
      margin-bottom: 2rem;
      color: var(--text-color);
    }

    .theme-toggle {
      margin: 1rem 0;
    }
  `]
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
