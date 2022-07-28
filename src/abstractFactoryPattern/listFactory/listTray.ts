import { Item } from "./../factory/item";
import { Tray } from "./../factory/tray";

export class ListTray extends Tray {
  makeHTML(): string {
    return `<li>
    ${this.caption}
    <ul>
    ${this.tray.map((item: Item) => item.makeHTML()).join("")}
    </ul>
    </li>`;
  }
}
