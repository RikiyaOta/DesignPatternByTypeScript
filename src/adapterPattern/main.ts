import { Print } from "./print";
import { PrintBanner } from "./printBanner";

console.log("----- Start -----");

const p: Print = new PrintBanner("Hello");
p.printWeak();
p.printStrong();

console.log("----- Finish -----");
