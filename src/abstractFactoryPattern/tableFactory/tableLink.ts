import { Link } from "./../factory/link";

export class TableLink extends Link {
  makeHTML(): string {
    return `<td><a href=${this.url}>${this.caption}</a></td>\n`;
  }
}
