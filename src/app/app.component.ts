import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'me';
}
