import { AbstractDisplay } from "./abstractDisplay";

export class CharDisplay extends AbstractDisplay {
  public constructor(private char: string) {
    super();
  }

  public open(): void {
    this.printStringWithoutNewline("<<");
  }

  public print(): void {
    this.printStringWithoutNewline(this.char);
  }

  public close(): void {
    this.printStringWithNewline(">>");
  }
}
