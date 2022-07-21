import { Entry } from "./entry";
import { Visitor } from "./visitor";

export class Directory extends Entry {
  private dir: Entry[] = [];

  constructor(private name: string) {
    super();
  }

  getName() {
    return this.name;
  }

  getSize() {
    const initValue = 0;
    return this.dir.reduce((acc, entry) => acc + entry.getSize(), initValue);
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
