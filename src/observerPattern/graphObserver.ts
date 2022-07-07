import { Observer } from "./observer";
import { NumberGenerator } from "./numberGenerator";

const write = (string: string) => process.stdout.write(string);

export class GraphObserver implements Observer {
  public update(generator: NumberGenerator) {
    write("GraphObserver:");
    const count = generator.getNumber();
    for (let i = 0; i < count; i++) write("*");
    console.log("");
  }
}
