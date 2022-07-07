const generateRandomBool = () => Math.random() < 0.5;

const FRUIT_NAMES = ["apple", "grape", "banana", "orange"];
const DELICIOUS_PREFIX = "おいしい";

export class Fruit {
  public static createRandomFruit(): Fruit {
    const prefix = generateRandomBool() ? DELICIOUS_PREFIX : "";
    const name = FRUIT_NAMES[Math.floor(Math.random() * FRUIT_NAMES.length)];
    return new Fruit(prefix + name);
  }

  private constructor(public name: string) {}

  public isDelicious(): boolean {
    return this.name.startsWith(DELICIOUS_PREFIX);
  }
}
