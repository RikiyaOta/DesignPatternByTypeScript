import { Gamer } from "./gamer";

const GAME_COUNT = 50;

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1_000));

const initMoney = 100;
const gamer = new Gamer(initMoney);

// 初期状態を保存しておく
let memento = gamer.createMemento();

(async () => {
  for (let i = 0; i < GAME_COUNT; i++) {
    console.log("=====", i);
    console.log("現状", gamer);

    gamer.bet();

    console.log(`所持金は${gamer.getMoney()}円になりました。`);

    if (gamer.getMoney() > memento.getMoney()) {
      console.log("（だいぶ増えたので、現在の状態を保存しておこう）");
      memento = gamer.createMemento();
    } else if (gamer.getMoney() < memento.getMoney() / 2) {
      console.log("（だいぶ減ったので、以前の状態に復帰しよう）");
      gamer.restoreMemento(memento);
    }

    console.log("");
    await sleep();
  }
})();
