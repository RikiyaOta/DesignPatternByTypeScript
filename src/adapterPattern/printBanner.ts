import { Print } from "./print";
import { Banner } from "./banner";

export class PrintBanner extends Banner implements Print {
  constructor(string: string) {
    super(string);
  }

  printWeak() {
    this.showWithParen();
  }

  printStrong() {
    this.showWithAster();
  }
}
