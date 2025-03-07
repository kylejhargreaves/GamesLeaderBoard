import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { IntroductionComponent } from '../introduction/introduction.component'

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, MatTableModule, IntroductionComponent],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
})
export class LeaderboardComponent {
  displayedColumns: string[] = ['position', 'playerName', 'gamesPlayed', 'totalScore'];

  //replace later to two data sources
  dataSource = [
    { position: 1, playerName: 'Alice',  gamesPlayed:6,  totalScore: 100 },
    { position: 2, playerName: 'Bob',    gamesPlayed:6,  totalScore: 95 },
    { position: 3, playerName: 'Charlie',gamesPlayed:6,  totalScore: 90 }
  ];
}
