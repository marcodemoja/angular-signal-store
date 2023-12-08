import { ChangeDetectionStrategy, Component, Signal, inject } from '@angular/core';
import { StoreService, actions } from '../../services/store.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent {
  storeSvc = inject(StoreService);
  books!:Signal<Book[]>;
  booksLoaded = this.storeSvc.selectLoaded;

  constructor() {
    this.storeSvc.dispatch(actions['getBooks']);
    this.books = this.storeSvc.selectBooks;
  }

}
