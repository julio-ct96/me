import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  #renderer: Renderer2 = inject(Renderer2);

  navOptions: InputSignal<{ title: string; id: string }[]> =
    input.required<{ title: string; id: string }[]>();

  scrollTo(elementId: string): void {
    const element = this.#renderer.selectRootElement(`#${elementId}`, true);

    if (!element) return;

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
