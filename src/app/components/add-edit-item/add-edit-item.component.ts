import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-edit-item',
  standalone: true,
  imports: [],
  templateUrl: './add-edit-item.component.html',
  styleUrl: './add-edit-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEditItemComponent {

}
