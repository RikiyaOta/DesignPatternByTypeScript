import { Printable } from "./printable";

export class Printer implements Printable {
  private name = "";

  constructor(name?: string) {
    if (name) {
      this.name = name;
      this.heavyJob(`Printerのインスタンス(${name})を生成中！`);
    } else {
      this.heavyJob("Printerのインスタンスを生成中！");
    }
  }

  setPrinterName(name: string) {
    this.name = name;
  }

  getPrinterName() {
    return this.name;
  }

  print(string: string) {
    console.log(`=== ${this.name} ===`);
    console.log(string);
  }

  private heavyJob(message: string) {
    console.log(message);

    // 時間のかかる処理を簡潔に実装。意味はない。
    Array.from(Array(100_000_000), (_v, k) => {
      if (k % 10_000_000 === 0) process.stdout.write(".");
      return k;
    });

    console.log("完了.");
  }
}
