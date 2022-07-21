import { Visitor } from "./visitor";
import { File } from "./file";
import { Directory } from "./directory";

export class SizeVisitor implements Visitor {
  private size = 0;

  visit(file: File): void;
  visit(directory: Directory): void;

  visit(entry: File | Directory) {
    if (entry instanceof File) throw "SizeVisitor shouldn't visit any files";
    else if (entry instanceof Directory) this.doDirectoryVisit(entry);
  }

  getSize(): number {
    return this.size;
  }

  private doDirectoryVisit(directory: Directory) {
    const iterator = directory.iterator();
    let item = iterator.next();
    while (!item.done) {
      const { value: entry } = item;
      this.size += entry.getSize();
      item = iterator.next();
    }
  }
}
