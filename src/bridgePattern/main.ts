import { Display } from "./display";
import { CountDisplay } from "./countDisplay";
import { StringDisplayImpl } from "./stringDisplayImpl";
import { TextFileDisplayImpl } from "./textFileDisplayImpl";

console.log("===== Part of StringDisplayImpl =====");
const d1: Display = new Display(new StringDisplayImpl("Hello, Japan."));
const d2: Display = new CountDisplay(new StringDisplayImpl("Hello, World."));
const d3: CountDisplay = new CountDisplay(
  new StringDisplayImpl("Hello, Universe.")
);

d1.display();
d2.display();
d3.display();
d3.multiDisplay(5);
d3.randomDisplay(5);

console.log("===== Part of TextFileDisplayImpl =====");
const d4: Display = new Display(new TextFileDisplayImpl("text1.txt"));
const d5: Display = new CountDisplay(new TextFileDisplayImpl("text2.txt"));
const d6: CountDisplay = new CountDisplay(new TextFileDisplayImpl("text3.txt"));

d4.display();
d5.display();
d6.display();
d6.multiDisplay(5);
d6.randomDisplay(5);
