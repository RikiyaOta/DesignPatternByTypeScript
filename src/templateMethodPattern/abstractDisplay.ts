import _ from "lodash";

export abstract class AbstractDisplay {
  private static REPEAT_COUNT = 5;

  abstract open(): void;
  abstract print(): void;
  abstract close(): void;

  public display(): void {
    this.open();
    _.each(_.range(AbstractDisplay.REPEAT_COUNT), (_n) => this.print());
    this.close();
  }

  protected printStringWithoutNewline(s: string): void {
    process.stdout.write(s);
  }

  protected printStringWithNewline(s: string): void {
    console.log(s);
  }
}
