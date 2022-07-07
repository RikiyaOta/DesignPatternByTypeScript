import { Observer } from "./observer";
import { DigitObserver } from "./digitObserver";
import { GraphObserver } from "./graphObserver";
import { NumberGenerator } from "./numberGenerator";
import { RandomNumberGenerator } from "./randomNumberGenerator";

const generator: NumberGenerator = new RandomNumberGenerator();
const observer1: Observer = new DigitObserver();
const observer2: Observer = new GraphObserver();

generator.addObserver(observer1);
generator.addObserver(observer2);

generator.execute();
