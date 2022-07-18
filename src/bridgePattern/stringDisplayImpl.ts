import { DisplayImpl } from "./displayImpl";

const print = (s: string) => process.stdout.write(s);
const println = (s: string) => console.log(s);

export class StringDisplayImpl extends DisplayImpl {
  private string: string;
  private width: number;

  constructor(string: string) {
    super();
    this.string = string;
    this.width = string.length;
  }

  rawOpen() {
    this.printLine();
  }

  rawPrint() {
    println(`|${this.string}|`);
  }

  rawClose() {
    this.printLine();
  }

  private printLine() {
    print("+");
    for (let i = 0; i < this.width; i++) print("-");
    println("+");
  }
}
