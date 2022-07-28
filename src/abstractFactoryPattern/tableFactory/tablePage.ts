import { Page } from "./../factory/page";
import { Item } from "./../factory/item";

export class TablePage extends Page {
  makeHTML(): string {
    return `<html><head><title>${this.title}</title></head>
    <body>
    <h1>${this.title}</h1>
    <table width="80%" border="3">
    ${this.content.map((item: Item) => item.makeHTML()).join("")}
    </table>
    <hr><address>${this.author}</address>
    </body></html>
    `;
  }
}
