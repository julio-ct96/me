import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  id: InputSignal<string> = input.required<string>();
}
