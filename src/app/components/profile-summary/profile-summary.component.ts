import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-summary',
  standalone: true,
  imports: [],
  templateUrl: './profile-summary.component.html',
  styleUrl: './profile-summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSummaryComponent {

}
