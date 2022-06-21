import { Strategy } from "./strategy";
import { Hand } from "./hand";

export class Player {
  private name: string;
  private strategy: Strategy;
  private winCount = 0;
  private loseCount = 0;
  private gameCount = 0;

  constructor(name: string, strategy: Strategy) {
    this.name = name;
    this.strategy = strategy;
  }

  public nextHand(): Hand {
    return this.strategy.nextHand();
  }

  public win() {
    this.strategy.study(true);
    this.winCount++;
    this.gameCount++;
  }

  public lose() {
    this.strategy.study(false);
    this.loseCount++;
    this.gameCount++;
  }

  public even() {
    this.gameCount++;
  }

  public toString(): string {
    return (
      "[" +
      this.name +
      ":" +
      this.gameCount +
      " games, " +
      this.winCount +
      " win, " +
      this.loseCount +
      " lose]"
    );
  }
}
