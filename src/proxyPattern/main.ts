import { Printable } from "./printable";
import { PrinterProxy } from "./printerProxy";

const printer: Printable = new PrinterProxy("Alice");

console.log(`Current name is ${printer.getPrinterName()}.`);

printer.setPrinterName("Bob");

console.log(`Current name is ${printer.getPrinterName()}.`);

printer.print("Hello, World!");
