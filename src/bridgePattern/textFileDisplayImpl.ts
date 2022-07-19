import path from "path";
import fs from "fs";
import { DisplayImpl } from "./displayImpl";

export class TextFileDisplayImpl extends DisplayImpl {
  private filePath: string;

  constructor(fileName: string) {
    super();
    this.filePath = path.resolve(__dirname, fileName);
  }

  // 面倒なので、ファイルの存在確認だけとします。
  rawOpen() {
    if (!fs.existsSync(this.filePath))
      throw "File Open Error: File not exists.";

    console.log("## ---------- ##");
  }

  rawPrint() {
    process.stdout.write(fs.readFileSync(this.filePath, { encoding: "utf8" }));
  }

  // 面倒なので、ファイルの存在確認だけとします。
  rawClose() {
    if (!fs.existsSync(this.filePath))
      throw "File Close Error: File not exists.";
    console.log("## ---------- ##");
  }
}
