import { DisplayImpl } from "./displayImpl";

export class Display {
  constructor(private impl: DisplayImpl) {}

  open() {
    this.impl.rawOpen();
  }

  print() {
    this.impl.rawPrint();
  }

  close() {
    this.impl.rawClose();
  }

  display() {
    this.open();
    this.print();
    this.close();
  }
}
