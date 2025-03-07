import { Component, Renderer2 } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component'
import { RouterModule } from '@angular/router';

@Component({
  imports: [NavMenuComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private renderer: Renderer2) { }

  title = 'app';

  toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
    else {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }
}
