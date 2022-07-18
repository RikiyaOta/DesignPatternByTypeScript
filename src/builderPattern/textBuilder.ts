import { Builder } from "./builder";

export class TextBuilder extends Builder {
  private buffer = "";

  private append(text = "") {
    this.buffer = this.buffer.concat(text + "\n");
  }

  makeTitle(title: string) {
    this.append("==========================");
    this.append(`『${title}』`);
  }

  makeString(string: string) {
    this.append(`■ ${string}`);
  }

  makeItems(items: string[]) {
    items.forEach((item) => this.append(`  ・${item}`));
    this.append();
  }

  close() {
    this.append("==========================");
  }

  getResult(): string {
    return this.buffer;
  }
}
