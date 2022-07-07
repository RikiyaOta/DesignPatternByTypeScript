import { Observer } from "./observer";
import { NumberGenerator } from "./numberGenerator";

export class DigitObserver implements Observer {
  public update(generator: NumberGenerator) {
    console.log("DigitObserver:", generator.getNumber());
  }
}
