import { Visitor } from "./visitor";
import { File } from "./file";
import { Directory } from "./directory";

export class ListVisitor implements Visitor {
  private currentDir = "";

  visit(file: File): void;
  visit(directory: Directory): void;

  visit(entry: File | Directory) {
    if (entry instanceof File) {
      const file = entry;
      console.log(this.currentDir + "/" + file.toString());
    } else if (entry instanceof Directory) {
      const directory = entry;
      console.log(this.currentDir + "/" + directory.toString());

      const currentDir = this.currentDir;
      this.currentDir = this.currentDir + "/" + directory.getName();

      const iterator = directory.iterator();

      let item = iterator.next();
      while (!item.done) {
        const { value: entry } = item;
        entry.accept(this);
        item = iterator.next();
      }

      this.currentDir = currentDir;
    }
  }
}
