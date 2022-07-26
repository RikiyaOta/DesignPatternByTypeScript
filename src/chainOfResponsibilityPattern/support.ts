import { Trouble } from "./trouble";

export abstract class Support {
  private name: string;
  private next?: Support;

  constructor(name: string) {
    this.name = name;
  }

  setNext(next: Support) {
    this.next = next;
  }

  support(trouble: Trouble) {
    if (this.resolve(trouble)) {
      this.done(trouble);
    } else if (this.next !== undefined) {
      this.next.support(trouble);
    } else {
      this.fail(trouble);
    }
  }

  toString(): string {
    return `[${this.name}]`;
  }

  protected abstract resolve(trouble: Trouble): boolean;

  protected done(trouble: Trouble) {
    console.log(`${trouble.toString()} is resolved by ${this.toString()}.`);
  }

  protected fail(trouble: Trouble) {
    console.log(`${trouble.toString()} cannot be resolved.`);
  }
}
