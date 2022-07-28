export abstract class Item {
  constructor(protected caption: string) {}

  abstract makeHTML(): string;
}
