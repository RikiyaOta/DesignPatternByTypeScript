import { Link } from "./../factory/link";

export class ListLink extends Link {
  makeHTML(): string {
    return ` <li><a href=${this.url}>${this.caption}</a></li>\n`;
  }
}
