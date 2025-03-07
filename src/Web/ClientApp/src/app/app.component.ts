import { Component } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component'
import { RouterModule } from '@angular/router';

@Component({
  imports: [NavMenuComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
}
