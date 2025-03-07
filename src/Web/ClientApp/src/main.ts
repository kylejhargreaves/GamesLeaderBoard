import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './app/home/home.component';
import { CounterComponent } from './app/counter/counter.component';
import { LeaderboardComponent } from './app/features/leaderboard/leaderboard.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'leaderboard', component: LeaderboardComponent }
    ]),
    importProvidersFrom(BrowserAnimationsModule)
  ]
});
