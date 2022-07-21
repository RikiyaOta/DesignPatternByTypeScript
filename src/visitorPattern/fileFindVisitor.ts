import { Visitor } from "./visitor";
import { File } from "./file";
import { Directory } from "./directory";

export class FileFindVisitor implements Visitor {
  private foundFiles: File[] = [];
  constructor(private extension: string) {}

  visit(file: File): void;
  visit(directory: Directory): void;

  visit(entry: File | Directory) {
    if (entry instanceof File) this.doFileVisit(entry);
    else if (entry instanceof Directory) this.doDirectoryVisit(entry);
  }

  getFoundFiles(): Iterator<File> {
    return this.foundFiles[Symbol.iterator]();
  }

  private doFileVisit(file: File) {
    if (this.isTargetFile(file)) this.foundFiles.push(file);
  }

  private doDirectoryVisit(directory: Directory) {
    const iterator = directory.iterator();
    let item = iterator.next();
    while (!item.done) {
      const { value: entry } = item;
      entry.accept(this);
      item = iterator.next();
    }
  }

  private isTargetFile(file: File): boolean {
    return file.getName().endsWith("." + this.extension);
  }
}
