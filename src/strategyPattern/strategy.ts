import { Hand } from "./hand";
export interface Strategy {
  nextHand(): Hand;
  // TODO: 流石に変えたい
  study(win: boolean): void;
}
