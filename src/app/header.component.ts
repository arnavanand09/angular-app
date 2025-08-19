import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="container">
        <span class="brand">{{ title }}</span>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar { background: #1976d2; color: white; padding: 0.5rem 1rem; }
      .brand { font-weight: 600; font-size: 1.25rem; }
    `,
  ],
})
export class HeaderComponent {
  @Input() title = 'BookApp';
}
