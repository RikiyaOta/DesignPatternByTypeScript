import { Item } from "./item";

export abstract class Tray extends Item {
  protected tray: Item[] = [];

  add(item: Item) {
    this.tray.push(item);
  }
}
