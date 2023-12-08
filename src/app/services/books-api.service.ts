import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, concatMap, filter, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  books:Book[] = [
    {
      id: 1,
      name: 'Oliver Twist',
      description: 'Nice book',
      author: 'Unknown',
      published: new Date()
    },{
      id: 2,
      name: 'Peter Pan',
      description: 'best book',
      author: 'Unknown',
      published: new Date()
    },{
      id: 3,
      name: 'White Snow',
      description: 'lovely book',
      author: 'Unknown',
      published: new Date()
    },{
      id: 4,
      name: 'The Miserable',
      description: 'favorite book',
      author: 'Victor Ugo',
      published: new Date()
    },{
      id: 5,
      name: 'Cinderella',
      description: 'Nice book',
      author: 'Unknown',
      published: new Date()
    },{
      id: 6,
      name: 'Athomic habits',
      description: 'Nice book',
      author: 'Unknown',
      published: new Date()
    },{
      id: 7,
      name: 'Another book',
      description: 'Nice book',
      author: 'Unknown',
      published: new Date()
    },{
      id: 8,
      name: 'Newest Book',
      description: 'Nice book',
      author: 'Unknown',
      published: new Date()
    },{
      id: 9,
      name: 'Miss world',
      description: 'Nice book',
      author: 'Unknown',
      published: new Date()
    },{
      id: 10,
      name: 'Oliver Twist 2',
      description: 'Nice book',
      author: 'Unknown',
      published: new Date()
    },
  ]


  fetchBooks(): Observable<Book[]> {
    return timer(2000).pipe(
      concatMap(() => of(this.books))
    )
  }

  getBookById(id: number): Observable<Book> {
    const books = of(...this.books);
    return timer(2000).pipe(
      switchMap(() => books.pipe(
        filter(book => book.id === id)
      ))
    )
  }

}
