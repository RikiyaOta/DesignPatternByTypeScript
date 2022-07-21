import { Aggregate } from "./aggregate";
import { Iterator } from "./iterator";
import { Book } from "./book";
import { BookShelfIterator } from "./bookShelfIterator";

export class BookShelf implements Aggregate<Book> {
  private books: Book[] = [];
  private last = 0;

  getBookAt(index: number): Book {
    return this.books[index];
  }

  appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }

  getLength(): number {
    return this.last;
  }

  iterator(): Iterator<Book> {
    return new BookShelfIterator(this);
  }
}
