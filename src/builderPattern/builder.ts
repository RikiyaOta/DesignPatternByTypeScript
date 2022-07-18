export abstract class Builder {
  abstract makeTitle(title: string): void;
  abstract makeString(string: string): void;
  abstract makeItems(items: string[]): void;
  abstract close(): void;
}
