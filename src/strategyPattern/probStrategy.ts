import _ from "lodash";
import { Strategy } from "./strategy";
import { Hand, HandType, HandTypes } from "./hand";

const increment = (n: number) => n + 1;

type History = {
  [key in HandType]: { [key in HandType]: number };
};

export class ProbStrategy implements Strategy {
  private previousHandValue: HandType = "GUU";
  private currentHandValue: HandType = "GUU";
  private history: History = {
    GUU: { GUU: 1, CHO: 1, PAA: 1 },
    CHO: { GUU: 1, CHO: 1, PAA: 1 },
    PAA: { GUU: 1, CHO: 1, PAA: 1 },
  };

  public nextHand(): Hand {
    const totalWinCount = this.getTotalWinCountBy(this.currentHandValue);
    const bet = _.random(1, totalWinCount);

    const getNextHandValue = () => {
      if (bet < this.history[this.currentHandValue]["GUU"]) return "GUU";

      if (
        bet <
        this.history[this.currentHandValue]["CHO"] +
          this.history[this.currentHandValue]["PAA"]
      )
        return "CHO";

      return "PAA";
    };

    this.previousHandValue = this.currentHandValue;
    this.currentHandValue = getNextHandValue();
    return new Hand(this.currentHandValue);
  }

  public study(win: boolean): void {
    if (win) {
      const newHistory = _.update(
        this.history,
        [this.previousHandValue, this.currentHandValue],
        increment
      );
      this.history = newHistory;
    } else {
      const [notCurrentValue1, notCurrentValue2]: HandType[] = _.filter(
        HandTypes,
        (handtype) => handtype !== this.currentHandValue
      );

      let newHistory = this.history;
      newHistory = _.update(
        newHistory,
        [this.previousHandValue, notCurrentValue1],
        increment
      );
      newHistory = _.update(
        newHistory,
        [this.previousHandValue, notCurrentValue2],
        increment
      );
      this.history = newHistory;
    }
  }

  private getTotalWinCountBy(handvalue: HandType): number {
    const winHistory = _.get(this.history, handvalue);
    const winCounts = _.values(winHistory);
    return _.sum(winCounts);
  }
}
