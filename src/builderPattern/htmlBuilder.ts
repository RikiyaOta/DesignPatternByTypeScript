import fs from "fs";
import path from "path";
import { Builder } from "./builder";

const FS_APPEND_MODE = "a";

export class HTMLBuilder extends Builder {
  private fileName: string;
  private fileDescriptor: number;

  private write(htmlText: string) {
    fs.writeSync(this.fileDescriptor, htmlText + "\n");
  }

  constructor(fileName: string) {
    super();
    this.fileName = fileName;
    this.fileDescriptor = fs.openSync(
      path.resolve(__dirname, fileName),
      FS_APPEND_MODE
    );
  }

  makeTitle(title: string) {
    this.write(`<html><head><title>${title}</title></head><body>`);
    this.write(`<h1>${title}</h1>`);
  }

  makeString(string: string) {
    this.write(`<p>${string}</p>`);
  }

  makeItems(items: string[]) {
    this.write("<ul>");
    items.forEach((item) => this.write(`<li>${item}</li>`));
    this.write("</ul>");
  }

  close() {
    this.write("</body></html>");
    fs.closeSync(this.fileDescriptor);
  }

  getResult(): string {
    return this.fileName;
  }
}
