import { Printable } from "./printable";
import { Printer } from "./printer";

export class PrinterProxy implements Printable {
  private name = "";
  private realPrinter?: Printer;

  constructor(name: string) {
    this.name = name;
  }

  setPrinterName(name: string) {
    this.realPrinter?.setPrinterName(name);
    this.name = name;
  }

  getPrinterName() {
    return this.name;
  }

  print(string: string) {
    this.realize();
    this.realPrinter?.print(string);
  }

  private realize() {
    if (!this.realPrinter) this.realPrinter = new Printer(this.name);
  }
}
