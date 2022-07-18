export interface Printable {
  setPrinterName(name: string): void;
  getPrinterName(): string;
  print(string: string): void;
}
