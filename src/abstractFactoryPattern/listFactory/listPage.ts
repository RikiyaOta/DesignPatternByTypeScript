import { Page } from "./../factory/page";
import { Item } from "./../factory/item";

export class ListPage extends Page {
  makeHTML(): string {
    return `<html><head><title>${this.title}</title></head>
    <body>
    <h1>${this.title}</h1>
    <ul>
    ${this.content.map((item: Item) => item.makeHTML()).join("")}
    </ul>
    <hr><address>${this.author}</address>
    </body></html>
    `;
  }
}
