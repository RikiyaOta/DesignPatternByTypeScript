export class Trouble {
  constructor(private number: number) {}

  getNumber(): number {
    return this.number;
  }

  toString(): string {
    return `[Trouble ${this.number}]`;
  }
}
