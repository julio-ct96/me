import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
    selector: 'app-articles',
    imports: [],
    templateUrl: './articles.component.html',
    styleUrl: './articles.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesComponent {
  id: InputSignal<string> = input.required<string>();
}
