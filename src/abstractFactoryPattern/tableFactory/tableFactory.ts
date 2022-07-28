import { Factory } from "./../factory/factory";
import { Link } from "./../factory/link";
import { Tray } from "./../factory/tray";
import { Page } from "./../factory/page";
import { TableLink } from "./tableLink";
import { TableTray } from "./tableTray";
import { TablePage } from "./tablePage";

export class TableFactory extends Factory {
  createLink(caption: string, url: string): Link {
    return new TableLink(caption, url);
  }

  createTray(caption: string): Tray {
    return new TableTray(caption);
  }

  createPage(title: string, author: string): Page {
    return new TablePage(title, author);
  }
}
