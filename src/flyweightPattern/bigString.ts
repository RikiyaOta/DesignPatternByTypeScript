import { BigChar } from "./bigChar";
import { BigCharFactory } from "./bigCharFactory";

export class BigString {
  private bigChars: BigChar[];

  constructor(string: string) {
    const factory = BigCharFactory.getInstance();
    this.bigChars = Array.from(string).map((char) => factory.getBigChar(char));
  }

  print() {
    this.bigChars.forEach((bigChar) => bigChar.print());
  }
}
