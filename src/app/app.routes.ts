import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { BooksListComponent } from './containers/books-list/books-list.component';

export const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  }
];
