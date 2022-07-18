import fs from "fs";
import path from "path";

const FS_APPEND_MODE = "a";

export class HTMLWriter {
  private fileDescriptor: number;
  private write(text: string) {
    fs.writeSync(this.fileDescriptor, text);
  }

  constructor(fileName: string) {
    const filePath = path.resolve(__dirname, fileName);
    this.fileDescriptor = fs.openSync(filePath, FS_APPEND_MODE);
  }

  makeTitle(title: string) {
    this.write("<html>");
    this.write("<head>");
    this.write(`<title>${title}</title>`);
    this.write("</head>");
    this.write("<body>");
    this.write(`<h1>${title}</h1>`);
  }

  makeParagraph(message: string) {
    this.write(`<p>${message}</p>`);
  }

  makeLink(href: string, caption: string) {
    this.makeParagraph(`<a href=${href}>${caption}</a>`);
  }

  makeMailLink(mailAddress: string, username: string) {
    this.makeLink(`mailto: ${mailAddress}`, username);
  }

  close() {
    this.write("</body>");
    this.write("</html>");
    fs.closeSync(this.fileDescriptor);
  }
}
