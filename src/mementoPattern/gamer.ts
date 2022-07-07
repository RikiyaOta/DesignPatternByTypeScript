import { Memento } from "./memento";
import { Fruit } from "./fruit";

const rollDice = () => Math.floor(Math.random() * 6 + 1);

export class Gamer {
  private currentMoney: number;
  private currentFruits: Fruit[] = [];

  constructor(money: number) {
    this.currentMoney = money;
  }

  public getMoney(): number {
    return this.currentMoney;
  }

  public bet() {
    switch (rollDice()) {
      case 1: {
        this.currentMoney += 100;
        console.log("所持金が増えました！");
        break;
      }

      case 2: {
        this.currentMoney /= 2;
        console.log("所持金が半分になりました。。。");
        break;
      }

      case 6: {
        const fruit = Fruit.createRandomFruit();
        this.currentFruits.push(fruit);
        console.log(`フルーツ(${fruit.name})をもらいました！`);
        break;
      }

      default: {
        console.log("何も起こりませんでした。");
        break;
      }
    }
  }

  public createMemento(): Memento {
    const memento = new Memento(this.currentMoney);
    this.currentFruits.forEach((fruit) => {
      if (fruit.isDelicious()) memento.addFruit(fruit);
    });
    return memento;
  }

  public restoreMemento(memento: Memento) {
    this.currentMoney = memento.getMoney();
    this.currentFruits = memento.getFruits();
  }
}
