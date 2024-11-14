import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OverviewComponent } from './components/sections/overview/overview.component';
import { NgComponentOutlet } from '@angular/common';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { SkillsComponent } from './components/sections/skills/skills.component';
import { ArticlesComponent } from './components/sections/articles/articles.component';
import { ExperienceComponent } from './components/sections/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProfileSummaryComponent,
    NavigationComponent,
    NgComponentOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'me';

  sections = [
    { component: OverviewComponent, title: 'Sobre mí', id: 'overview' },
    { component: ExperienceComponent, title: 'Experiencia', id: 'experience' },
    { component: ProjectsComponent, title: 'Proyectos destacados', id: 'projects' },
    { component: ArticlesComponent, title: 'Artículos', id: 'articles' },
    { component: SkillsComponent, title: 'Habilidades', id: 'abilities' },
  ];
}
