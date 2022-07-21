import { Entry } from "./entry";
import { Visitor } from "./visitor";

export class File extends Entry {
  constructor(private name: string, private size: number) {
    super();
  }

  getName() {
    return this.name;
  }

  getSize() {
    return this.size;
  }

  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}
