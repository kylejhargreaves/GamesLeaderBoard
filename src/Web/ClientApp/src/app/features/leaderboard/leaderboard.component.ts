import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css',
  imports: [MatTableModule],
})
export class LeaderboardComponent {

}
