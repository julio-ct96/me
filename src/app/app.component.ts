import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileSummaryComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'me';
  sections = [
    { title: 'Sobre mi', id: 'overview' },
    { title: 'Proyectos destacados', id: 'projects' },
    { title: 'Habilidades', id: 'abilities' },
    { title: 'Artículos', id: 'articles' },
  ];
}
