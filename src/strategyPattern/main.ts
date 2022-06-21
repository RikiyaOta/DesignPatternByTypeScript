import _ from "lodash";
import { Player } from "./player";
import { WinningStrategy } from "./winningStrategy";
import { ProbStrategy } from "./probStrategy";

const player1 = new Player("Taro", new WinningStrategy());
const player2 = new Player("Hanako", new ProbStrategy());

let evenCount = 0;

_.each(_.range(1, 1001), (i) => {
  const nextHand1 = player1.nextHand();
  const nextHand2 = player2.nextHand();

  if (nextHand1.isStrongerThan(nextHand2)) {
    console.log(`[Game ${i}] Winner: `, player1);
    player1.win();
    player2.lose();
  } else if (nextHand2.isStrongerThan(nextHand1)) {
    console.log(`[Game ${i}] Winner: `, player2);
    player2.win();
    player1.lose();
  } else {
    console.log(`[Game ${i}] Even...`);
    player1.even();
    player2.even();
    evenCount++;
  }
});

console.log("===== Total Result =====");
console.log(player1.toString());
console.log(player2.toString());
console.log("Event Count:", evenCount);
