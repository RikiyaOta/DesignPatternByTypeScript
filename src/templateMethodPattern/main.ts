import { AbstractDisplay } from "./abstractDisplay";
import { CharDisplay } from "./charDisplay";
import { StringDisplay } from "./stringDisplay";

const d1: AbstractDisplay = new CharDisplay("H");
const d2: AbstractDisplay = new StringDisplay("Hello, world!");
const d3: AbstractDisplay = new StringDisplay("It's a beautiful day!");

d1.display();

d2.display();

d3.display();
