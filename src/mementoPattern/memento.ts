import { Fruit } from "./fruit";

const cloneArray = (array: Array<any>) => array.concat();

export class Memento {
  private money: number;
  private fruits: Fruit[];

  constructor(money: number) {
    this.money = money;
    this.fruits = [];
  }

  public getMoney(): number {
    return this.money;
  }

  public getFruits(): Fruit[] {
    return cloneArray(this.fruits);
  }

  public addFruit(fruit: Fruit) {
    this.fruits.push(fruit);
  }
}
