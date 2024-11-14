import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  id: InputSignal<string> = input.required<string>();
}
