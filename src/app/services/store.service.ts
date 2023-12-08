import { Injectable, computed, inject, signal } from '@angular/core';
import {takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Book } from '../models/book';
import { BooksApiService } from './books-api.service';
import { Subject } from 'rxjs';

export interface AppState {
  books: Book[];
  loaded: boolean;
  error: string | null;
}

export interface Action {
  type: string;
  payload: any;
}

export const actions:{[key:string]: Action} = {
    getBooks: {
      type: 'GET BOOKS',
      payload: ''
    }
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  apiSvc = inject(BooksApiService);

  //initial state
  appState = signal<AppState>({
    books: [],
    loaded: false,
    error: null
  });

  //selectors
  selectBooks = computed(() => this.appState().books );
  selectLoaded = computed(() => this.appState().loaded);
  error = computed(() => this.appState().error);

  //actions
  getBooksAction = new Subject();

  dispatch(action: Action) {
    switch(action.type) {
      case actions['getBooks'].type:
        this.getBooks()
      break;
    }
  }

  private getBooks() {
    this.apiSvc.fetchBooks().pipe(takeUntilDestroyed()).subscribe((books) => {
      this.appState.update((state) => {
        return {...state, books, loaded: true}
      });
    });
  }



}
