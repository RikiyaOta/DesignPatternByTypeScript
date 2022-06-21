import _ from "lodash";

type FightResult = "WIN" | "LOOSE" | "DRAW";
export type HandType = "GUU" | "CHO" | "PAA";

export const HandTypes: HandType[] = ["GUU", "CHO", "PAA"];

export class Hand {
  private handvalue: HandType;

  constructor(handvalue: HandType) {
    this.handvalue = handvalue;
  }

  public isStrongerThan(enemy: Hand): boolean {
    return this.fight(enemy) == "WIN";
  }

  public isWeakerThan(enemy: Hand): boolean {
    return this.fight(enemy) === "LOOSE";
  }

  private getStrongerHandType(): HandType {
    switch (this.handvalue) {
      case "GUU":
        return "PAA";
      case "CHO":
        return "GUU";
      case "PAA":
        return "CHO";
    }
  }

  private fight(enemy: Hand): FightResult {
    if (enemy.handvalue === this.handvalue) return "DRAW";

    if (this.getStrongerHandType() === enemy.handvalue) return "LOOSE";

    return "WIN";
  }

  public static getRandomHand(): Hand {
    const handvalue = HandTypes[_.random(2)];
    return new Hand(handvalue);
  }
}
