import _ from "lodash";
import { Strategy } from "./strategy";
import { Hand } from "./hand";

export class WinningStrategy implements Strategy {
  private wonLastTime = false;
  private previousHand = new Hand("GUU");

  public nextHand(): Hand {
    if (this.wonLastTime) {
      return this.previousHand;
    } else {
      const newHand = Hand.getRandomHand();
      this.previousHand = _.clone(newHand);
      return newHand;
    }
  }

  public study(win: boolean): void {
    this.wonLastTime = win;
  }
}
