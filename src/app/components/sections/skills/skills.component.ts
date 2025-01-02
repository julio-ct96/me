import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  id: InputSignal<string> = input.required<string>();
}
