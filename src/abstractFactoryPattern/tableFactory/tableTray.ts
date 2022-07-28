import { Item } from "./../factory/item";
import { Tray } from "./../factory/tray";

export class TableTray extends Tray {
  makeHTML(): string {
    return `<td><table width="100%" border="1"><tr><td bgcolor="#ccc" align="conter" colspan="${
      this.tray.length
    }"><b>${this.caption}</b></td></tr>
    <tr>
    ${this.tray.map((item: Item) => item.makeHTML()).join("")}
    </tr></table></td>
    `;
  }
}
