import { Book } from "./book";
import { BookShelf } from "./bookShelf";

const bookShelf = new BookShelf();
bookShelf.appendBook(new Book("Around the World in 80 Days"));
bookShelf.appendBook(new Book("Bible"));
bookShelf.appendBook(new Book("Cinderella"));
bookShelf.appendBook(new Book("Daddy-Long-Legs"));
const iterator = bookShelf.iterator();

// Point: 具体的な実装ではなく、抽象に依存している！
while (iterator.hasNext()) {
  const book = iterator.next();
  console.log("Book Name:", book.getName());
}
