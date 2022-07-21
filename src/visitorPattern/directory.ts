import { Entry } from "./entry";
import { Visitor } from "./visitor";
import { SizeVisitor } from "./sizeVisitor";

export class Directory extends Entry {
  private dir: Entry[] = [];

  constructor(private name: string) {
    super();
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    const sizeVisitor = new SizeVisitor();
    this.accept(sizeVisitor);
    return sizeVisitor.getSize();
  }

  override add(entry: Entry): Entry {
    this.dir.push(entry);
    return this;
  }

  override iterator(): Iterator<Entry> {
    return this.dir[Symbol.iterator]();
  }

  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}
