import { Iterator } from "./iterator";
import { Book } from "./book";
import { BookShelf } from "./bookShelf";

export class BookShelfIterator implements Iterator<Book> {
  private bookShelf: BookShelf;
  private index: number;

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  hasNext(): boolean {
    return this.index < this.bookShelf.getLength();
  }

  next(): Book {
    const book = this.bookShelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
