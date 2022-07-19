import { Display } from "./display";
import { DisplayImpl } from "./displayImpl";

export class CountDisplay extends Display {
  constructor(impl: DisplayImpl) {
    super(impl);
  }

  multiDisplay(times: number) {
    this.open();
    for (let i = 0; i < times; i++) this.print();
    this.close();
  }

  randomDisplay(max: number) {
    const times = Math.floor(Math.random() * max);
    this.multiDisplay(times);
  }
}
