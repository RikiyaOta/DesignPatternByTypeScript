import { NumberGenerator } from "./numberGenerator";

export const sleep = (sleepSecond: number) =>
  new Promise((resolve) => setTimeout(resolve, sleepSecond * 1_000));

export class RandomNumberGenerator extends NumberGenerator {
  private static MAX = 49;
  private static MIN = 0;
  private static generateRandomNumber() {
    return Math.floor(
      Math.random() * (RandomNumberGenerator.MAX - RandomNumberGenerator.MIN) +
        RandomNumberGenerator.MIN
    );
  }

  private number = RandomNumberGenerator.generateRandomNumber();

  public getNumber(): number {
    return this.number;
  }

  public async execute(): Promise<void> {
    const repeatCount = 20;
    for (let i = 0; i < repeatCount; i++) {
      this.number = RandomNumberGenerator.generateRandomNumber();
      this.notifyObservers();
      await sleep(1);
    }
  }
}
