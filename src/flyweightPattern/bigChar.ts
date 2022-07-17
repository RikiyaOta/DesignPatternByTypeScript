import path from "path";
import fs from "fs";

export class BigChar {
  private charName: string;
  private fontData: string;

  constructor(charName: string) {
    this.charName = charName;

    const textFilePath = path.resolve(__dirname, `assets/big${charName}.txt`);

    try {
      this.fontData = fs.readFileSync(textFilePath, "utf8");
    } catch (e) {
      this.fontData = charName + "?";
    }
  }

  print() {
    process.stdout.write(this.fontData);
  }
}
