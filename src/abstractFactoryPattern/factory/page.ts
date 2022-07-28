import fs from "fs";
import { Item } from "./item";

export abstract class Page {
  protected title: string;
  protected author: string;
  protected content: Item[] = [];

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  add(item: Item) {
    this.content.push(item);
  }

  output() {
    const fileName = `${this.title}.html`;
    const fileContent = this.makeHTML();
    fs.writeFileSync(fileName, fileContent);
    console.log(`${fileName} を作成しました。`);
  }

  abstract makeHTML(): string;
}
