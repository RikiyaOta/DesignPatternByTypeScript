import _ from "lodash";
import { AbstractDisplay } from "./abstractDisplay";

export class StringDisplay extends AbstractDisplay {
  private string: string;
  private width: number;

  public constructor(string: string) {
    super();
    this.string = string;
    this.width = string.length;
  }

  public open(): void {
    this.printLine();
  }

  public print() {
    const formattedString = "|" + this.string + "|";
    this.printStringWithNewline(formattedString);
  }

  public close(): void {
    this.printLine();
  }

  private printLine() {
    this.printStringWithoutNewline("+");
    _.each(_.range(this.width), (_n) => this.printStringWithoutNewline("-"));
    this.printStringWithNewline("+");
  }
}
