import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
})
export class LeaderboardComponent {
  displayedColumns: string[] = ['position', 'playerName', 'gamesPlayed', 'totalScore'];

  //replace later to two data sources
  dataSource = [
    { position: 1, name: 'Alice', score: 100 },
    { position: 2, name: 'Bob', score: 95 },
    { position: 3, name: 'Charlie', score: 90 }
  ];
}
