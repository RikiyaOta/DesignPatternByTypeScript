import { Element } from "./element";
import { Visitor } from "./visitor";

class FileTreatmentException extends Error {}

export abstract class Entry implements Element {
  abstract getName(): string;
  abstract getSize(): number;

  abstract accept(visitor: Visitor): void;

  // Directory でのみ実装したい
  add(_: Entry): Entry {
    throw new FileTreatmentException();
  }

  // Directory でのみ実装したい
  iterator(): Iterator<Entry> {
    throw new FileTreatmentException();
  }

  toString(): string {
    return `${this.getName()} (${this.getSize()})`;
  }
}
